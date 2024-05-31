export interface Id{
  id:number
}

export interface basicLog{
  createdAt?:Date,
  updatedAt?:Date,
  deletedAt:Date | null
}

export interface user{
  firstname:string,
  surname:string,
  middlename:string,
  email:string,
  dob:Date,
  password:string,
  roleName:string,
  mobileNo:number
}

export interface gift{
  userName:string,
  productName:string,
  description:string,
  price:number,
  productImg:string,
  receiverName:string,
  receiverAddress:string,
  eventName:string,
  eventDate:Date
}

export interface event{
  userName:string,
  eventName:string,
  eventDate:Date,
  eventNote:string
}

export interface product{
  productName:string,
  productDetails:string,
  quantity:number,
  category:string
}