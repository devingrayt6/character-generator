export class Stats{
  constructor(data){
    this.wisScore=data.wisdomScore;
    this.intScore=data.intScore;
    this.strScore=data.strScore;
    this.constScore=data.constScore;
    this.dexScore=data.dexScore;
    this.charScore=data.charScore;
  }

  //gets modifier depending on which attribute needs to be checked
  //IMPORTANT:
  //passed in value must be string, ONE of following values:"str","int","wis","const","dex","char"
  getStatMod(attribute){

    let mod;

    switch(attribute){

      case "str":
        mod = modCalc(this.strScore);
        break;

      case "int":
        mod = modCalc(this.intScore);
        break;

      case "wis":
        mod = modCalc(this.wisScore);
        break;

      case "const":
        mod = modCalc(this.constScore);
        break;

      case "dex":
        mod = modCalc(this.dexScore);
        break;

      case "char":
        mod = modCalc(this.charScore);
        break;
    }

    return mod;
  }
  //end of stats class
  }
  
  //stats function 

  //calculates the modifier score based on attribute value
  function modCalc(score){
    let mod;
    //determine attribute score
    if(score<2){
      mod=-5;
    }else if(score<=3){
      mod=-4;
    }else if(score<=5){
      mod=-3
    }else if(score<=7){
      mod=-2
    }else if(score<=9){
      mod=-1
    }else if(score<=11){
      mod=0
    }else if(score<=13){
      mod=1
    }else if(score<=15){
      mod=2
    }else if(score<=17){
      mod=3
    }else if(score<=19){
      mod=4
    }else if(score<=21){
      mod=5
    }else if(score<=23){
      mod=6
    }else if(score<=25){
      mod=8
    }else if(score<=27){
      mod=9
    }else if(score<=30){
      mod=10
    }
    return mod;//return modifier value
  }
