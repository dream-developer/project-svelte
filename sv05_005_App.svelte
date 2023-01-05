<script>
  let overCount = 0;
  let outCount = 0;
  let enterCount = 0;
  let leaveCount = 0;
</script>

<p>mouseenter:{enterCount} / mouseleave:{leaveCount}</p>
<p>mouseover:{overCount} / mouseout:{outCount}</p>
<div id="parent"
  on:mouseenter={ ()=>{ enterCount++ } }
  on:mouseleave={ ()=>{ leaveCount++ } }
  on:mouseover={ ()=>{ overCount++ } }
  on:mouseout={ ()=>{ outCount++ } }
  on:focus={ () => { /* focus時の処理 */ } }
  on:blur={ ()=> { /* blur時の処理 */ } }  
>
  <div id="child"></div>
</div>

<style>
  #parent{
    background-color: gray;
    width: 100px;
    height: 100px; 
    padding: 50px; }
  #child{
    background-color: black;
    width: 100px;
    height: 100px }
</style>