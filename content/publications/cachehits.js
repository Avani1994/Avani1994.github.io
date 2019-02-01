/**
 * Created by avanisharma on 1/20/19.
 */
document.write(`
<div id="publication_cachehitsmiss" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Using Gem5 Simulator and DineroIV Cache Simulator to analyse TLB and Cache Statistics with 
        Multi threaded Parsec Benchmarks</h4>
      </div>
      <div class="modal-body">
      Abstract:
This paper analyses the unicore X86 architecture and records the Translation Look Aside Buffer and Level 2 Cache statistics. 
These statistics include collecting hits and misses for each memory instruction for both TLB and L2 cache. 
To bring these statistics together Gem5 simulator and DineroIV cache simulator have been used. 
After assembling these statistics system's performance can be inferred. Detailed issues related to this analysis have been discussed 
in this paper. <a href='https://ieeexplore.ieee.org/document/7380687' target="_blank"> View Paper </a>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
`)

