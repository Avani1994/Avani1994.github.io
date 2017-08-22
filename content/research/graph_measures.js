document.write(`
<div id="R-graph" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Building Library for graph Theoretical Measures</h4>
      </div>
      <div class="modal-body">
      <h2> The Problem </h2>
      Build a Library for common graph measures which takes input as adjacency matrix of a graph network and outputs the values for multiple measures
      <h2> Explanation of Measures </h2>
       1. Node Degree : Node degree is the most basic network measure. It refers to the number of connections, throughwhich a node links to the rest of network. For directed edges there are two types of degrees : in degree (incomingedges), out degree (outgoing egdes).<br>
       2. Degree Distribution : It is the probability distribution of all degrees over whole network. For random networks,degree distribution is Gaussian, since all connections are equally probable.  But for complex networks there islong tail towards high degree distribution.<br>
       3. Assortativity :  It refers to correlation between the degrees of nodes.  Positive assortativity indicates that highdegree nodes are connected to each other.<br>
       4. Clustering Coefficient: It refers to the number of actual edges that exist between the neighbours of a node as aproportion of the total number of possible edges. Random networks have low clustering coefficient as comparedto complex networks.<br>
       5. Path Length and Efficiency : It refers to the minimum number of hops required to reach from one node to other.Shorter  path  lengths  indicate  high  globalefficiencyof  parallel  information  transfer.   Random  and  complexnetworks have short mean path length whereas regular lattices have long mean path length.<br>
       6. Connection Density : It is the actual number of edges present in a graph as proportion of total number of possibleedges.<br>
       7. Hubs, Centrality :  Centrality for a node means how many shortest connecting paths between other node pairspass through it. Hubs are nodes with high centrality. Hubs are important for efficiency of network. By deleting anode from a network, it can be observed how important a node was, comparing the efficiency of both the actualand lesioned network. <br>
       8. Modularity  :  A  module  contains  several  highly  interconnected  nodes.   However,  there  are  less  connectionsbetween different modules. Hubs are the nodes which connect different modules. <br>
       9. Small Worldness: Small worldness is the characteristic of scale free networks where degree distribution followspower law.  It means that for a large highly connect network (social networks), only a few nodes are requiredto cover whole network indicating short mean path length.  For these networks there are few highly connectednodes which are further connected to other highly connected nodes (positive assortativity) and thus coveringwhole network. <br>
  The repository is can be found <a href='https://github.com/Avani1994/Graph_Measures.git'> here </a>
  <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
  </div>  
</div>
</div>
</div>
</div>

`)