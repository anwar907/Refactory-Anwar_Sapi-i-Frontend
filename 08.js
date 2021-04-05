<script type = "text/javascript">
      const str = "23dn3ir30fd2eddd";
      const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12];
      const repleceAsterisk = (str, indices) => {
          let res = '';
          res = indices.reduce((acc, val) => {
              acc[val] = '*';
              return acc;
          }, str.split('')).join('');
          return res;
      };
      document.write(repleceAsterisk(str, arr));
</script>
