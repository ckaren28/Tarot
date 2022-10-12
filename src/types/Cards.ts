export default interface ICard {
    id?: any | null,
    title: string,
    description: string,
    image?: string
}
export interface ICardsDealt {
    getCard: ICard[];
  }
  
  export type IHandMutation = {
    addCard: ICard[];
  };