import {
  ISignal
} from '@phosphor/signaling';

import {
  IIterator
} from '@phosphor/algorithm';

import {
  DataModel
} from './datamodel';


export
interface ICellState {
    enabled: boolean;
    selected: boolean;
    hilited: boolean;
    hovered: boolean;
};

export
abstract class StateModel {
    abstract cellState(region: DataModel.CellRegion, row: number, column: number): ICellState;
    selectionChanged: ISignal<this, void>;
    selections: IIterator<DataModel.ICellIdentifier>;
};

export
namespace StateModel {
    export
    const defaultState: ICellState = {
        enabled: true,
        selected: false,
        hilited: false,
        hovered: false
    };
};
