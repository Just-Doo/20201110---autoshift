export class Period {

    constructor(){
        this.setStart();
        
        this.setEnd();

        this.getAllDatesBetweenStartandEnd();

    }

    setStart(){
        const start = document.getElementById('periodStart').value;
        if(start > this.setEnd){
            return alert("Start Date should be earlier before end Date.");
        } else {
            return start;
        }
    }

    setEnd(){
        const end = document.getElementById('periodEnd').value;
        if(end < this.setSart){
            return alert("End date should be later after the starrt date.");
        }
        return end;
    }

    getAllDatesBetweenStartandEnd(){
        
    }
}