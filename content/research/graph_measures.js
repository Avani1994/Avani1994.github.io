document.write(`
<div id="myModal2" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">ElasticSearch implementation</h4>
      </div>
      <div class="modal-body">
      <h2> The Problem </h2>
      To implement searching through the user content on the website. The requirements were
      1. Search should take care of synonyms, partial matching, usernames, and all the fields that were present in the document.
      2. Search should put balance findability and exploration.
      3. The results should be ordered on the basis of recency, popularity, content, match to query.
      <h2> The Solution </h2>
      Well, there is a lot to do here. The most challenging part is to keep balance in all the things. 
      To give a example, for Maths quizzes there are a lot of new quizzes being created and for Physical Education there are very few quizzes being created. Now if equal weights are assingned to recency in both these cases we will see a lot of recent quizzes in Mathematics and only a few in Physical Education.

      <h3>For featured results:</h3>
      <pre><code>
{
    "functions":[  
        {  
          "script_score":{  
            "script":{  
              "lang":"painless",
              "params":{  
                "weight":1.15,
                "grades":[  
                  5,
                  5
                ],
                "decay":0.5
              },
              "inline":"    long lowG = doc[\"lowGrade\"].value;     long highG = doc[\"highGrade\"].value;     if (lowG == 0 && highG == 13) {       return 1;     }     ArrayList grades = params.grades;     double weight = params.weight;     double decay = params.decay;     double score = 0;     double center = (highG + lowG) / 2.0;     double span = highG - center;     double deno =  2 * Math.pow( ( - 1 * 1 / ( 2 * Math.log( decay ) ) ), 2 );     for (int i = 0; i < grades.size(); i++) {       double grade = grades.get(i);       if (deno == 0)         continue;       double decr = Math.min( 1, - 0.1 * (grade - lowG) + 1 );       score += Math.exp( -( Math.pow( Math.max( 0, Math.abs( grade - center ) - span ), 2 ) / deno) ) * decr;     }     return 1 + ( score / grades.length ) * weight;   "
            }
          }
        },
        {  
          "script_score":{  
            "script":{  
              "lang":"painless",
              "params":{  
                "weight":1,
                "subjects":[  
                  "Mathematics"
                ],
                "subWeight":[  
                  1
                ]
              },
              "inline":"      ArrayList docSubjects = new ArrayList(doc['subjects.aggs'].values);       ArrayList subWeight = params.subWeight;\n      ArrayList subjects = params.subjects;       double weight = params.weight;\n      double max = 0.0;       for (int i = 0; i < subjects.size(); i++) {         String subject = subjects.get(i);\n        if (docSubjects.contains(subject)) {           max = Math.max(subWeight.get(i), max);\n        }       }       if (docSubjects.size() == 0) {\n        return 1;\n      }\n      return 1 + (weight * max) / docSubjects.size();\n  "
            }
          }
        },
        {  
          "linear":{  
            "createdAt":{  
              "origin":"now",
              "scale":"14d",
              "offset":"21d",
              "decay":0.83
            }
          },
          "filter":{  
            "range":{  
              "createdAt":{  
                "gte":"now-35d"
              }
            }
          },
          "weight":1.3
        },
        {  
          "script_score":{  
            "script":{  
              "lang":"painless",
              "params":{  
                "weight":0.615
              },
              "inline":"    long played = doc[\"played\"].value;     double weight = params.weight;     return 1 + Math.pow(played / 40000.0, 1 / 10.0) * weight;     "
            }
          },
          "filter":{  
            "range":{  
              "played":{  
                "gte":"800"
              }
            }
          }
        },
        {  
          "gauss":{  
            "played":{  
              "origin":800,
              "scale":800,
              "decay":0.77
            }
          },
          "filter":{  
            "range":{  
              "played":{  
                "gte":20,
                "lte":"800"
              }
            }
          }
        },
        {  
          "gauss":{  
            "played":{  
              "origin":20,
              "scale":20,
              "decay":0.77
            }
          },
          "filter":{  
            "range":{  
              "played":{  
                "lt":"20"
              }
            }
          },
          "weight":0.7
        },
        {  
          "filter":{  
            "match":{  
              "occupation":"student"
            }
          },
          "weight":0.5
        }
      ]
    }
}
</code></pre>

    Now let's take it down like humans.

    <h4> Grades </h4>
    To handle this first thing to understand is that the lower grade of the quiz is more important than the upper grade. For example,
    If the grade of a quiz if from 3 to 6 then the quiz is not much relevant for a student of class 2 but it will be relevant for a person of class 7 since that student has studied the material in the quiz.
    So the scoring is also done in the similar fashion. 
    Here is the script for that:
    <pre><code>
long lowG = doc["lowGrade"].value;
long highG = doc["highGrade"].value;
if (lowG == 0 && highG == 13) {
    return 1;
}
ArrayList grades = params.grades;
double weight = params.weight;
double decay = params.decay;
double score = 0;
double center = (highG + lowG) / 2.0;
double span = highG - center;
double deno =  2 * Math.pow( ( - 1 * 1 / ( 2 * Math.log( decay ) ) ), 2 );
for (int i = 0; i < grades.size(); i++) {
    double grade = grades.get(i);
    if (deno == 0)
    continue;
    double decr = Math.min( 1, - 0.1 * (grade - lowG) + 1 );
    score += Math.exp( -( Math.pow( Math.max( 0, Math.abs( grade - center ) - span ), 2 ) / deno) ) * decr;
}
return 1 + ( score / grades.length ) * weight;
    </code></pre>
    This generates score of the form as shown in the graph.
    <img id="gradesGraph" src="images/grades.png">

    <h4> Subjects </h4>
    The results should be relevant for to the teacher to which we are showing resutls. It would be useless to show Maths results to a History teacher.
    But it is important to show quizzes which have 2 subject to the teachers that teach those 2 subjects.

    The algorithm is all that score is multiplied by n(intersection of user's subjects and quiz's subject) / n(union of user's subject and quiz's subject).
    The code for the algorithm is
    <pre><code>
ArrayList docSubjects = new ArrayList(doc['subjects.aggs'].values); \
ArrayList subWeight = params.subWeight;
ArrayList subjects = params.subjects; \
double weight = params.weight;
double max = 0.0; \
for (int i = 0; i < subjects.size(); i++) { \
String subject = subjects.get(i);
if (docSubjects.contains(subject)) { \
    max = Math.max(subWeight.get(i), max);
} \
} \
if (docSubjects.size() == 0) {
return 1;
}
return 1 + (weight * max) / docSubjects.size();
</code></pre>

      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)