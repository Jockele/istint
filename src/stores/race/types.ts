import {Stint} from '../stint/types'

export interface ITimedRace extends IRace {
    duration: number //unit: minutes
    stints: Stint[]
}

export interface IRace {
    name: string
}

export enum RaceActionTypes {
    SET_DURATION = '@@race/SET_DURATION',
    SET_NAME = '@@race/SET_NAME',
    COMPUTE_PROPOSAL_TRY = '@@race/COMPUTE_PROPOSAL_TRY',
    COMPUTE_PROPOSAL = '@@race/COMPUTE_PROPOSAL',
    SET_STINTS = '@@race/SET_STINTS',
    
    SAGA_TEST = '@@race/SAGA_TEST',
    SAGA_TEST_DOUBLE = '@@race/SAGA_TEST_DOUBLE',
    SAGA_COMPUTE_PROPOSAL = '@@race/SAGA_COMPUTE_PROPOSAL',
}

export interface IRaceState {
    readonly data : ITimedRace
}