
//craet a object
           var   wi={
                   name: "<h2> কঠিন পদ্ধতি</h2> MR. Abulmia <br>",
             age:29+"<br>",
             education:" BBA in dahaka university <br>",
             work:"Engeneer <p> <hr>"   
     }
       document.write(wi.name);
       document.write(wi.age);
       document.write(wi.education);
       document.write(wi.work);
       //creat a simple object.

       function WI(name,age,education,work){
      //            this.name=name;
      //      this.age=age;
      //      this.education=education;
      //      this.work=work;
      //       this.dcmnt =function(){
      //        document.write( this.name);
      //  document.write( this.age);
      //  document.write( this.education);
      //  document.write( this.work);
      //    }


      document.write(name);
      document.write(age);
      document.write(education);
      document.write(work);

     } 
       var wi1 = new  WI( " <h2>সহজ পদ্ধতি</h2> abu sayed <br>" ,28+"<br>","MSc in BUET <br>","engeneer <p>") 
       var wi2 = new  WI( " Abdul bari <br>" ,27+"<br>"," BSc in BUBT <br>"," Laver <p>") 
       var wi3 = new  WI( "Babul mia <br>" ,38 +"<br>","MSc in CUET <br>"," MD <p>") 
       var wi4 = new  WI( " Hasem mia <br>" ,18+"<br>","MS c in  Dhaka University <br>"," Employee <p>") 
       var wi5=  new  WI( " Name:jhsem mia <br>" ,'Age:32 <br>'," Educatin:MSc in  kaluna University <br>"," Work:engeener <p>") 
        wi1.dcmnt();
        wi2.dcmnt();
        wi3.dcmnt();
        wi4.dcmnt();
        wi5.dcmnt();
                                                                   