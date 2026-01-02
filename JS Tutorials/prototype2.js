function Laptop(brand, ram){
    this.brand= brand;
    this.ram= ram;
}

Laptop.prototype.upgradeRam= function(extraRam){
    this.ram += extraRam;
};

Laptop.prototype.getConfig= function(){
    return this.brand + " with "+ this.ram + "GB RAM";
};

const l1= new Laptop("Macbook",16);
const l2= new Laptop("Thinkpad",32);

l1.upgradeRam(16);

console.log(l1.getConfig());
console.log(l2.getConfig());