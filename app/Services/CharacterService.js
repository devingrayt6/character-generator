import Character from '../Models/Character.js';

class CharacterService {
  constructor() {
    console.log("Hello from character services")
  }

  rollStatsStandard() {

    for (let i = 0; i < 4; i++) {
      let roll = Math.floor((Math.random() * 6) + 1)
      var rollArray = []
      rollArray.push(roll)
    }

    removeSmallest(rollArray)

    let rollSum

    for (let i = 0; i < rollArray.length; i++) {
      rollSum += rollArray[i]
    }
    // let first =rollArray[0];
    // let location;
    // for(let i=0;i<rollArray.length;i++){
    //   if(i+1<rollArray.length){
    //   if(first<=rollArray[i+1]){
    //     location =i;
    //   }
    //   else{
    //     first=rollArray[i+1]
    //   }
    // }
    // else{
    //   rollArray[location]
    // }
  }
}

}


const CHARACTERSERVICE = new CharacterService()

export default CHARACTERSERVICE