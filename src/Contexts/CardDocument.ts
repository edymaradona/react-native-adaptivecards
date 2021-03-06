import { ViewNode } from '../Models/Nodes/Abstract/ViewNode';
import { AdaptiveCardNode } from '../Models/Nodes/Cards/AdaptiveCard';
import { CardForm } from './CardForm';

export class CardDocument {
    public model: AdaptiveCardNode;
    public readonly form: CardForm;

    constructor(payload: any) {
        this.model = new AdaptiveCardNode(undefined, payload);
        this.form = new CardForm(this);
    }

    public findNode(predict: (node: ViewNode) => boolean) {
        if (this.model) {
            return this.model.descendsAndSelf.find(predict);
        }
        return undefined;
    }

    public findNodeById(id: string) {
        if (this.model && id) {
            return this.findNode(current => current.id === id);
        }
        return undefined;
    }
}
