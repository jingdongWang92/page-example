import { denormalize } from 'normalizr';
import * as schemas from './schemas';
import { createStructuredSelector } from 'reselect';


export const getGeoJSON = state => denormalize(state.cartogram, schemas.cartogram, state.entities)

export const getEntities = state => state.entities;

export const getCode = state => state.code;

export const getProps = createStructuredSelector({
  cartogramGeoJSON: getGeoJSON,
  entities: getEntities,
  code: getCode,
});
