// //import { Carousel } from '@pnp/spfx-controls-react'
// //import { Carousel } from '@pnp/spfx-controls-react'
// //import "../../../../../node_modules/bootstrap/dist/css"
// //import * as React from "react";
// //import ImageParser from 'react-image-parser';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../MasterPageRow2.scss";
// import Carousel from "react-bootstrap/Carousel";
// // const ImageSliders = (props: any) => {
// //   return (
// //     <>
// //       <div className="row2">
// //         <h2>Slider</h2>
// //       </div>
// //         {console.log(props.data)}
// //     <Carousel>
// //     {props.data &&
// //             props.data?.map((x: any) => {
// //               let y = [];
// //               console.log("hi");
// //               console.log(x.image);
// //               y = JSON.parse(x.image);
// //               console.log(y);
// //               console.log(y.serverUrl + y.serverRelativeUrl);
// //               const actualsrc = y.serverUrl + y.serverRelativeUrl;
// //               return (
// //       <Carousel.Item interval={500}>
// //         <img
// //           className="d-block w-100"
// //           src={actualsrc}
// //         />
// //         <Carousel.Caption>
// //           <h3>{x.Title}</h3>
// //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// //         </Carousel.Caption>
// //     <Carousel.Item/>
// //   )})
// //     </Carousel>
// //   )}
// //  </>
// // import * as React from 'react'
// // const ImageSliders = (props:any) => {
// //   return (
// //     <div>
// //       <Carousel>
// //       {props.data &&
// //             props.data?.map((x: any) => {
// //               let y = [];
// //               console.log("hi");
// //               console.log(x.image);
// //               y = JSON.parse(x.image);
// //               console.log(y);
// //               console.log(y.serverUrl + y.serverRelativeUrl);
// //               const actualsrc = y.serverUrl + y.serverRelativeUrl;
// //               return (
// //                 <>
// //       <Carousel.Item interval={500}>
// //         <img
// //           className="d-block w-100"
// //           src={actualsrc}
// //         />
// //         <Carousel.Caption>
// //           <h3>{x.Title}</h3>
// //           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
// //         </Carousel.Caption>
// //     <Carousel.Item/>
// //      </>
// //       }
// // <Carousel/>
// //     </div>
// //   )
// // }
// // export default ImageSliders
// import * as React from "react";
// const ImageSliders = (props: any) => {
//   return (
//     <>
//     <div>Slider</div>
//       <Carousel  variant="dark">
//         {props.data &&
//           props.data?.map((x: any,i:number) => {
//             let y = [];
//             let carouselstyle='';
//             console.log("hi");
//             console.log(x.image);
//             y = JSON.parse(x.image);
//             console.log(y);
//             console.log(y.serverUrl + y.serverRelativeUrl);
//             const actualsrc = y.serverUrl + y.serverRelativeUrl;
//               carouselstyle="carousel-item active"
//             return(
//               <>
//             <Carousel.Item className={carouselstyle} interval={500} key={actualsrc.id} >
//             <div className={carouselstyle}>
//               <img
//                 className="d-block w-100"
//                 src={actualsrc}
//                 height={200}
//                 width={200}
//                 alt="First slide"
//               />
//           </div> 
//               <Carousel.Caption>
//                 <h5>{x.Title}</h5>
//                 <p>
//                   Nulla vitae elit libero, a pharetra augue mollis interdum.
//                 </p>
//               </Carousel.Caption>
//             </Carousel.Item>
//             </>
//             )
//           })}
//       </Carousel>
//     </>
//   );
// };
// export default ImageSliders;
import * as React from 'react';
import "../MasterPageRow2.scss";
// import { ISliderProps } from 'office-ui-fabric-react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import { getSP } from './../pnpConfig';
// import { SPFI } from '@pnp/sp';
import "@pnp/sp/profiles";
import "@pnp/sp/lists";
import "@pnp/sp/webs";
import "@pnp/sp/site-users/web";
// const ImageSliders = (props: any) => {
//  return (
//    <>
//     <div className="row2">
//        <h2>Slider</h2>
//      </div>
//       {console.log(props.data)}
//       </>
//  )}
// const caml: ICamlQuery = {
//   ViewXml: "<View><ViewFields><FieldRef Name='image' /></ViewFields><RowLimit>5</RowLimit></View>",
// };
var ImageSliders = function (props) {
    // const [urls,setUrl] = React.useState<any>([])
    // let arr: any[] = []
    // const getData = async()=>{
    //   let _sp:SPFI  = getSP(props.context)
    //      const list = await _sp.web.lists.getByTitle("cursol2");
    // const r = await list.getItemsByCAMLQuery(caml);
    //     log resulting array to console
    // const r = props.data
    //     r.map((x:any)=>{
    //         let y = JSON.parse(x.image)
    //         console.log(y.serverUrl+y.serverRelativeUrl)
    //         arr.push(y.serverUrl+y.serverRelativeUrl)
    //     })
    // console.log(arr);
    // setUrl(arr)
    //}
    console.log(props.data);
    var arr = [];
    arr = props.data;
    console.log(arr);
    return (
    // <Slide>
    //   {props.data.map((x:any)=>{
    //     console.log(x);
    //  return(
    //   <>
    //   <div className='each-slide'>
    //   <img src={x} height="1500" width="1000"/>
    //   </div>
    //   </>
    //   )
    //   })}
    // </Slide>
    React.createElement(React.Fragment, null,
        React.createElement(Slide, null, props.data && props.data.map(function (x) {
            return (React.createElement("div", { className: 'each-slide' },
                React.createElement("img", { src: x })));
        }))));
};
export default ImageSliders;
//# sourceMappingURL=ImageSliders.js.map