/* eslint-disable comma-dangle */
import appelations from '../datas/datas';

/**
 * Get all labels
 */
export const getLabels = () =>
  appelations.map((appelation) => appelation.label);

/**
 * Get all colors
 */
export const getColorsByLabel = (label) =>
  appelations.find((appelation) => appelation.label === label).colors;

/**
 * Get all types
 */
export const getTypesByLabel = (label) =>
  appelations.find((appelation) => appelation.label === label).types;

/**
 * Get all sucrosites
 */
export const getSucrositesByLabel = (label) =>
  appelations.find((appelation) => appelation.label === label).sucrosites;
