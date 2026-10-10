export type Submission={_id:string;title:string;content:string;category:string;status:string;votes:number;userId?:{name:string}};
export type Cinema={_id:string;name:string;branch:string;city:string;address:string;capacity:number};
export type Merchandise={_id:string;name:string;category:string;price:number;stock:number;discountPercent:number;discountExpiresAt?:string};
export type CharacterRank={_id:string;character:string;averageScreenTime:number;predictions:number};
