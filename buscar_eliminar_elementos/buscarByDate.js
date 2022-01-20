var jsonInp =
[
    {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 18:41:42,731",
  
          "camId": "199",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 18:55:00,731",
  
          "camId": "199",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 18:39:43,731",
  
          "camId": "201",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 18:20:44,731",
  
          "camId": "200",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 15:29:00,731",
  
          "camId": "200",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 08:28:44,731",
  
          "camId": "3",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 18:28:00,731",
  
          "camId": "3",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 18:27:44,731",
  
          "camId": "3",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "STOP_VIDEO",
  
          "time": "2022-01-18 18:26:44,731",
  
          "camId": "4",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      },
      {
          "identifier": "START_VIDEO",
  
          "time": "2022-01-18 18:25:44,731",
  
          "camId": "8",
  
          "domain": "",
  
          "host": "CC2",
  
          "user": "root",
  
          "capability": "multicast",
  
          "speed": "0",
  
          "stream": "high"
      }
  ]
var newData = [];

//1) recorrer json
jsonInp.forEach (el =>{
//2) la nueva lista tiene datos?
    if(newData.length === 0){
        //si esta vacia, agregue el primer elemento del Json :)
        newData.push(el)
    }else{
        // El nuevo arreglo tiene datos
        //3) El elmento del json se encuentra en la nueva lista?
        var exist = newData.find( r=>  r.camId === el.camId )
        if(exist)
        {
           //4) extraiga la fecha y dejela con el siguiente formato: (2022-01-18 18:25:44)
           var dateAct  =   exist.time.slice(0,19)
           var dateJso  =   el.time.slice(0,19)
           //console.log(dateAct);
           //console.log(dateJso);
           //5) Cual es la fecha mas reciente?
           if(dateAct < dateJso){
                //si la fecha actual del nuevo arreglo es menor a la del json, se actualiza la lista con la fecha del json
                //6) calcule la possicion que ocupa en el arreglo
                var index = newData.findIndex( i=>  i.camId === el.camId )
                //console.log(index);
                //8) intercambie posiciones
                newData[index] = el
                //console.info( newData[index]);
           }
        }else{
            //9) Si no existe agregue el elemento al arreglo
            newData.push(el)
        }
    }
})

//Cuantos elementos tiene el nuevo arreglo
console.log(newData.length);