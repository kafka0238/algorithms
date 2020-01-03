"use strict";

/*
page 172
algorithms Dijkstra
 */
let graf = {
    'start': {
        'a': 6,
        'b': 2
    },
    'a': {
        'fin': 1
    },
    'b': {
        'a': 3,
        'fin': 5
    },
    'fin': {}
};
let costs = {
    'a': 6,
    'b': 2,
    'fin': Number.MAX_VALUE
};
let parents = {
  'a': 'start',
  'b': 'start',
  'fin': undefined
};
let processed = [];

let node = findLowestCostNode(costs);
while (node !== undefined) {
    let cost = costs[node];
    let neighbors = graf[node];
    for (let index in neighbors) {
        let newCost = cost + neighbors[index];
        if(costs[index] > newCost) {
            costs[index] = newCost;
            parents[index] = node
        }
    }
    processed.push(node);
    node = findLowestCostNode(costs);
}

function findLowestCostNode(costs) {
    let lowestCost = Number.MAX_VALUE;
    let lowestCostNode = undefined;
    for (let node in costs) {
        if(costs[node] < lowestCost && !processed.includes(node)) {
            lowestCost = costs[node];
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

console.log(costs.fin);
/*
END
page 172
algorithms Dijkstra
need return 6;
 */
