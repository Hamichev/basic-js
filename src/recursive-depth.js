module.exports = class DepthCalculator {
    if (!Array.isArray(arr)) {throw new Error();}
    let N=1;
    calculateDepth(arr) {
    	for(let i = 0; i<arr.length; i++)
        {
    		if(Array.isArray(arr[i]))
            {   
                N++;
                this.calculateDepth(arr[i]);
            }
            if (i==arr.length-1)
            {
                return N;
            }
    	}    
    }
};
