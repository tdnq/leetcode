const generate=require("../src/yanghuiTriangle/index.js");
const {assert} = require("chai");

describe("yanghuiTriangle",function(){
    it("tar[4]",function(){
        assert.deepEqual(generate(5)[4],[1,4,6,4,1],"ok");
    })
})

