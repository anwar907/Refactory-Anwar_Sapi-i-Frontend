<script type = "text/javascript">
       let s = 'hello anwar';
       let es = parseInt('*');
       var result = [...s].reduce((a, e) => { a[e] = a[e] ? a[e] + '*' : '*'; return a },{});
       var hasil = JSON.stringify(result);
       document.write(hasil); 
</script>
