var BigNumber = require('bignumber.js');
var async = require('async');
var Web3 = require('web3');

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var polkadot_abi = [{"constant":true,"inputs":[],"name":"ERA_PERIOD","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"certifier","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isActive","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_value","type":"uint256"}],"name":"bonus","outputs":[{"name":"extra","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"eraIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalAccounted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_who","type":"address"}],"name":"finalise","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"DIVISOR","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"buyins","outputs":[{"name":"accounted","type":"uint128"},{"name":"received","type":"uint128"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BONUS_MIN_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"DUST_LIMIT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_who","type":"address"}],"name":"uninject","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"calculateEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalFinalised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"BONUS_LATCH","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"USDWEI","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokenContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensAvailable","outputs":[{"name":"tokens","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"treasury","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"beginTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastNewInterest","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"STATEMENT_HASH","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxPurchase","outputs":[{"name":"spend","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"drain","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"BONUS_MAX_DURATION","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentPrice","outputs":[{"name":"weiPerIndivisibleTokenPart","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalReceived","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_value","type":"uint256"}],"name":"theDeal","outputs":[{"name":"accounted","type":"uint256"},{"name":"refund","type":"bool"},{"name":"price","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"endPrice","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"halted","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_who","type":"address"},{"name":"_received","type":"uint128"}],"name":"inject","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"buyin","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_halted","type":"bool"}],"name":"setHalted","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"tokenCap","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentBonus","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allFinalised","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_certifierContract","type":"address"},{"name":"_tokenContract","type":"address"},{"name":"_treasury","type":"address"},{"name":"_admin","type":"address"},{"name":"_beginTime","type":"uint256"},{"name":"_tokenCap","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"},{"indexed":false,"name":"accounted","type":"uint256"},{"indexed":false,"name":"received","type":"uint256"},{"indexed":false,"name":"price","type":"uint256"}],"name":"Buyin","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"},{"indexed":false,"name":"accounted","type":"uint256"},{"indexed":false,"name":"received","type":"uint256"}],"name":"Injected","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"}],"name":"Uninjected","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"era","type":"uint256"},{"indexed":false,"name":"received","type":"uint256"},{"indexed":false,"name":"accounted","type":"uint256"}],"name":"Ticked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"price","type":"uint256"}],"name":"Ended","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"who","type":"address"},{"indexed":false,"name":"tokens","type":"uint256"}],"name":"Finalised","type":"event"},{"anonymous":false,"inputs":[],"name":"Retired","type":"event"}];

var polkadot = web3.eth.contract(polkadot_abi).at("0x54a2d42a40F51259DedD1978F6c118a0f0Eff078");


var fromBlock = 4357051;
var toBlock = 'latest';
var bids = [];
var sum = new BigNumber(0);
var threshold = new BigNumber(0.8);

function getTransactions() {

    var i;
    var bidFilter = polkadot.Buyin({}, {fromBlock: fromBlock, toBlock: toBlock});
    var bidEvents = bidFilter.get(function (err, bidEvents) {
        if (err) {
            console.log(err);
            return;
        }

        console.log("Total number of bids so far: " + bidEvents.length);

        for (i=0; i< bidEvents.length; i++) {
            var bid = bidEvents[i];
            bids.push(bid.args.received);
            sum = sum.add(bid.args.received);
        }
        console.log("Total ETH sent:" + web3.fromWei(sum));

        bids.sort(function(a, b) { return b - a;});
        var new_sum = new BigNumber(0);
        var highest = bids[0];
        for (i = 0; i < bids.length; i++) {
            new_sum = new_sum.add(bids[i]);
            if (new_sum.div(sum).gt(threshold)) {
                console.log(
                    "Reached the " + threshold * 100 + "% threshold after " + (i + 1) + " transactions having contributed " + web3.fromWei(new_sum) +" ETH. Highest transaction bid: " + web3.fromWei(highest.toString(10)) + " ETH and lowest bid: " + web3.fromWei(bids[i].toString(10)) + " ETH.");
                break;
            }
        }
    });
}

getTransactions();



