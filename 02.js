<script type = "text/javascript">
       const textChange = '*';
       const kick = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];
       const paragraph = "Lorem ipsum dolor sit amet, consectetur adipisicing elit  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum";
       const sensor = (paragraph) =>
            paragraph.split(' ').reduce((acc, word) =>
                acc + ' ' + (kick.includes(word) ? textChange.repeat(word.length) : word), '');
        const lulusSensor = sensor(paragraph).trim();
        document.write(lulusSensor);
</script>
