<script type = "text/javascript">
    var array = [9, 4, 2, 4, 1, 5, 3, 0];
    function arrayList(array){
       var odd = array.filter((x) => x % 2).sort((a,b) => a - b);
       return array.map((x) => x % 2 ? odd.shift() : x);     
    }
    document.write("Hasil = " + arrayList(array));
</script>
