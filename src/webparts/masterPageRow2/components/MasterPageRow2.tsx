import * as React from "react";
import { ICamlQuery } from "@pnp/sp/lists";
import { SPFI } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp";
import { getSP } from "./pnpConfig";
import { IMasterPageRow2Props } from "./IMasterPageRow2Props";
import ImageSliders from "./ImageSlider/ImageSliders";
// import ImageSliders from "../components/ImageSlider/ImageSliders";
// import { WebPartContext } from "@microsoft/sp-webpart-base";

// import News from './News';
// import BirthdayinMonth from '../../birthdaysinMonth/Components/BirthdayinMonth';

const MasterPageRow2 = (props:IMasterPageRow2Props) => {
  let arr:any[] = [];
  
   const [imagedata, setImageData] = React.useState<any>();
  const caml3: ICamlQuery = {
    ViewXml:
      "<View><ViewFields><FieldRef Name='Title'/><FieldRef Name='image'/></ViewFields><RowLimit>5</RowLimit></View>",
  };
 
    const getImageData = async () => {
      try{
        let _sp: SPFI = getSP(props.context);
        const list = await _sp.web.lists.getByTitle("cursol2");
        var r = await list.getItemsByCAMLQuery(caml3);
        console.log(r);
       
    r.map((x:any)=>{
        let y = JSON.parse(x.image)
        console.log(y.serverUrl+y.serverRelativeUrl)
        arr.push(y.serverUrl+y.serverRelativeUrl)
  
    })
    
     console.log(arr);
    setImageData(arr);
    

   
        // console.log(imagedata,'hello');
        console.log("Hello")
        
      }
      catch(e){
        console.log(e);
      }
      };

      // setImageData("a");
      // const execute = async () => {
     
      //   await getImageData();
      // };
  React.useEffect(() => {
   try{
    console.log("hi");
   getImageData();
    console.log("hello")
   }
   catch(e){
    console.log(e);
   }
  }, []);
       
      

     
      return (
        <>
   
        <div className="row2container">
        <div className="row2container__part1">     <ImageSliders data={imagedata}/></div>

        
        <div className="row2container__part2">
        <div className="row2container__part2__item" >
          one
        </div>
        <div className="row2container__part2__item">
          two
        </div>
        <div className="row2container__part2__item">
          three
        </div>
        <div className="row2container__part2__item">
          four
        </div>
        <div className="row2container__part2__item">
          five
        </div>
        <div className="row2container__part2__item">
          six
        </div>
       
        </div>
        
        </div>
        <div className="row2container__part3">
          seven
        </div>
        </>
        
  );
};
export default MasterPageRow2;
