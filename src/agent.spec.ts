import {
    createBlockEvent,
    HandleBlock
  } from "forta-agent"
  import agent from "./agent"
  
  describe("uncle bot agent", () => {
    let handleBlock: HandleBlock
  
    const createTxEventWithUnckes= () => createBlockEvent({
      type:0,
      block:{
          difficulty: "",
          gasLimit :"",
          extraData:{} as any,
          gasUsed:"",
          hash:"",
          miner:"",
          logsBloom:"",
          mixHash:"",
          nonce:"",
          number:1,
          parentHash:"",
          receiptsRoot:"",
          sha3Uncles:"",
          size:"",
          stateRoot:"",
          timestamp: Date.now(),
          totalDifficulty:"",
          transactions: {} as any,
          transactionsRoot:'',
          uncles:["123"]
      }
    })
  
    beforeAll(() => {
      handleBlock = agent.handleBlock
    })
  
    describe("handle uncles block", () => {
      it("Uncles block detected", async () => {
        const txEvent = createTxEventWithUnckes()
  
        const findings = await handleBlock(txEvent)
  
        expect(findings.length).toEqual(1)
      })
  
      
    })
  })