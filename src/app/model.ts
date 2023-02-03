//Kenneth Method
export class Weather {
    constructor(
        public cityName: string,
        public temp: number,
        public pressure: number,
        public humidity: number,
        public description: string,
        public windSpeed: number,
        public windDegree: number
    ) {}
}

//Chuck Method
// export interface Weather {
//     cityName:   string,
//     temp:       number,
//     pressure:   number,
//     humidity:   number,
//     description:String,
//     windDeg:    number,
//     windSpeed:  number
// }