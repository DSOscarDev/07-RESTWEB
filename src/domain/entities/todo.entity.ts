



export class TodoEntity{
    constructor(
        public is: number,
        public text: string,
        public completedAt?: Date|null
    ){}

    get isCompleted(){
        return !!this.completedAt;
    }
}
