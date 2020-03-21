module.exports = class DepthCalculator {
    calculateDepth(arr,N=1) {
    	for(let i = 0; i<arr.length; i++)
        {
    		if(Array.isArray(arr[i]))
            {   
                N++;
                this.calculateDepth(arr[i],N+1);
            }
            if (i==arr.length-1)
            {
                return N;
            }
    	}    
    }
};
