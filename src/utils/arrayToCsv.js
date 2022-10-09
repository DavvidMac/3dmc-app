const arrayToCSV = (array) => {
  var csvContent = "data:text/csv;charset=utf-8,"
  var test_array = array;
 
    function pegaTitulos(lista) {
      let result = "";
      lista.forEach((obj, index) => {
        if (index > 0) return;
        console.log(obj)
        console.log(
          "-----------------------------------TITULOS---------------------------------------"
        );
        Object.entries(obj).forEach(([key, value]) => {
          result = result + (key || "") + ",";
          // console.log(`${key}`);
        });

        result = result + "\n";
      });
      return result;
    }

    function lines(r) {
      let result = "";
      r.forEach((obj, index) => {
        Object.entries(obj).forEach(([key, value]) => {
          result = result + (value || "") + ",";
        });
        result = result + "\n";
      });
      return result;
    }
    //console.log(lines(test_array));
    
    var encodedUri = encodeURI(csvContent+pegaTitulos(test_array)+lines(test_array));
		window.open(encodedUri);
  console.log()
};

export default arrayToCSV;
