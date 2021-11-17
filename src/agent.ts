import { 
  BlockEvent, 
  Finding, 
  HandleBlock, 
  FindingSeverity, 
  FindingType,
} from 'forta-agent'



const handleBlock: HandleBlock = async (blockEvent: BlockEvent) => {
  const findings: Finding[] = [];
  //Delete not active for 24h miners
  if (blockEvent.block.uncles.length >0){
    findings.push(Finding.fromObject({
      name: "Uncle Block Detected",
      description: `Detect Uncle blocks ${blockEvent.block.hash}`,
      alertId: "FORTA-120",
      severity: FindingSeverity.Medium,
      type: FindingType.Info,
      metadata:{
        uncleBlocks: `${blockEvent.block.uncles}`
      }
    }))

  }
 
  
 
  
  return findings;
}

export default {
  handleBlock
}