
export const convertBoolean = (data: any) => !!data

export const isTrue = (data: any) => convertBoolean(data) 

export const isFalse = (data: any) => !convertBoolean(data) 