import _ from 'lodash';

const interpolateString = (templateString, context) => {
  return _.template(templateString)(context);
};


const processArray = (array, context) => {
  return array.flatMap(item => processNode(item, context));
};

const processObject = (object, context) => {
  if (object.$data) {
    return handleDataBinding(object, context);
  } else {
    return _.mapValues(object, value => processNode(value, context));
  }
};


const handleDataBinding = (node, context) => {
  const dataPath = node.$data.slice(2, -1);
  const dataToInsert = _.get(context, dataPath, []);
  if (Array.isArray(dataToInsert)) {
    return dataToInsert.map(itemData => {
      const clonedNode = _.omit(_.cloneDeep(node), '$data');
      return processNode(clonedNode, itemData);
    });
  }

  return [];
};

const processNode = (node, context) => {
  if (_.isArray(node)) {
    return processArray(node, context);
  } else if (_.isPlainObject(node)) {
    return processObject(node, context);
  } else if (_.isString(node)) {
    return interpolateString(node, context);
  }
  return node;
};


export const populateSchema = (schema, data) => {
  return processNode(_.cloneDeep(schema), data);
};
