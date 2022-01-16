/* eslint-disable comma-dangle */
import appelations from '../datas/datas';

export const getLabels = () =>
  appelations.map((appelation) => appelation.label);

export const getColorsByLabel = (label) =>
  appelations.find((appelation) => appelation.label === label).colors;

export const getTypesByLabel = (label) =>
  appelations.find((appelation) => appelation.label === label).types;

export const getSucrositesByLabel = (label) =>
  appelations.find((appelation) => appelation.label === label).sucrosites;
