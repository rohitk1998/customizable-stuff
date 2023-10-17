import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import EditorComponent from "./EditorComponent"
import ProductTumbnail from "./ProductTumbnail";


function DesignerComponent() {
  const [editedImage, setEditedImage] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isActive, setIsActive] = useState(0);


  const handleImageEdit = (value )=> {
    setEditedImage(value)
  }

  const handleStateChange = ()=> {
    setIsClicked(true)

    setTimeout(() => {
      setIsClicked(false)
      console.log("editedImage dsadsa dadsadsada",editedImage);
    }, 5000);
    
  }

  return (
      <div className="w-[100%] h-[100vh] pt-[5%] bg-gray-100">
        <div
          className="justify-center items-start flex-row
        w-[100%]
        mx-auto
        overflow-[hidden]
        rounded-3xl
        grid 
        grid-cols-1
        md:grid-cols-1
        sm:grid-cols-1
        xl:grid-cols-2
        lg:grid-cols-2
        gap-[80px]
        "
        >
         <EditorComponent onSave={handleImageEdit} isClickedState={isClicked}/>
         <div className="
         w-[100%]
         grid
         grid-row-5
         justify-start
         items-start
         mt-10
         ">
          <div className="
          flex
          justify-start
          items-start
          w-[90%]
          mx-auto
          gap-5
          ">
          {
            [0,1].map((item,index)=> (
            <div key={item} style={{border: isActive == index ? "2px solid white" : "" , borderRadius:"18px", overflow:"hidden"}}>
               <ProductTumbnail />
              </div>
            ))
          }
          </div>
          <div className="w-[90%] mx-auto flex justify-center items-start flex-col mt-11">
          <h1 className="text-4xl font-semibold text-black group-hover:text-white">
            Watter-Bottle Milton ,Color Black , Thermal Secure 
          </h1>
          <h1 className="mt-5 text-lg font-normal text-black group-hover:text-white">
            Price : $20
          </h1>
          </div>
          <div className="
          flex
          flex-row
          justify-start
          items-center
          w-[90%]
          mx-auto
          gap-5
          ">
          <h1 className="text-lg font-normal text-black group-hover:text-white">
            Ajay : Best Printings
          </h1>
          {/* <button className="
            w-[200px]
            h-[40px]
            bg-gray-100
            rounded-full
            p-2
          ">More Reviews</button> */}
          </div>
          <div className="
          flex
          flex-row
          justify-start
          items-center
          w-[90%]
          mx-auto
          gap-5
          mt-5
         ">
         <button className="
            w-[200px]
            h-[40px]
            bg-white
            rounded-full
            p-2
          "
          onClick={handleStateChange}
          >Preview Item</button>
         </div>
         <div 
         className="flex
         flex-row
         justify-start
         items-center
         w-[90%]
         mx-auto
         gap-5
         mt-5"
         >
        
      {editedImage && (
        <div>
          <img 
           src={editedImage}
           alt="" 
           width={210}
           height={210}
           className="bg-gray-100 shadow-2xl rounded-2xl"
           />
        </div>
      )}
         </div>
         </div>
        </div>
      </div>
  );
}

export default DesignerComponent;




