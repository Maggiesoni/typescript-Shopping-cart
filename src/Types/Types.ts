

export type PhoneProducts = 
    {
      id: string|number,
      name: string,
      screen: string,
      system: string,
      frontCam: string,
      backCam: string,
      ram: string,
      rom: string,
      price: number,
      img: string,
    }
    
    export type ArrayProduct = PhoneProducts[]

    export type CartObject = PhoneProducts & {
        quantity: number
    }
    export type ProductItemProps ={
        productProp: PhoneProducts
        addProductProps: (product: PhoneProducts) => void; 
        
      }
    export type cartModalPropsType={
        cartModalProps: CartObject[]
       removeProduct: (id: string | number) => void; 
       increaseDecreaseItem: (id: string | number, quantity: number) => void; 
      }
      
    export type CartArray = CartObject[]
    
    export interface addToCartHandler {
        addToCart: (product: PhoneProducts) => void
    }
    
