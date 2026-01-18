some intresting problem
1. booking system (machanism) <---> very dependent on payment
2. same seat selected and non of them start booking (may the user change the seat) -- if both have selected the same seat and move to the payment then one of the user will get the response some thing not wright , please select some other seat, as one user move towards the payment (initialted) so the seat get locked -- no two people can pay for the same seat, 
3. if the user not booked then seat is still reserved for some time, and after some time it get released and other user can see it.


In flight booking, we only select number of seat and does't select the seat.
1. the senerio is like two use done the payment for one seat  at same time, without selecting the seat, and payment service response with ok response that payment is made, so how this is handled. This is very tighter seat (one seat two concurent user payment )


- Solution Database transaction
 - in realt life situation we might need to execute a series of queries in order to accumplise a task.
  - we might to do club of CRUD operation. and these series of operation can execte a single unit of work so hence these series of operations are called as db transaction.


- Now during the transation execution our database might go through a lot of changes and can be in an inconsitent intermidiate state.
 - A C I D - Atomicity  Consistency  Isolation  Durability

 Atomicity - a transaction is a bundle of statement that intendes to achive on final state when we are attempting a transaction , we either want to complete all the statment or non of them, we never want an intermediate state. this is called atomicity.
   

   State of transation - begin( transation just started)
                         commit (transation finised all the changes applyed successfully)
                         rollback (some happend in between and then what ever chages were successfully were reverted)


 Consistency - Date store in a db is always valid and in a consistante state.


 Isolation - It is an ability of multiple transation to execute without interfaring with one and another .       
             

 Durability - if some thing change in the db and unforseen circumstances happened then our changes should persestent



 execuation anamolies:-

-  read write conflict: -  reading wrong data as the previeous data was updated.             
-  write and read:- Dirty read (some thing that is not commited/ if you read the same data it is not same)
- write write conflict:- overwriting uncommited data.





InnoDb :- storage engin :- it is a interface between batabase management system and disk storage using which all the queries are executed.



How databases ensure atomicity ?
. Logging  - dbms logs all the action that it is doing so that later it can undo. (can be mainten in memory or disk) . its like   black box all the recodes are there.
. shadow pagging - dbms makes copies of pages and transactions(actions) and then this copy is initally consider as a temp copy and if transaction succeed then it start pointing to the new temp copy 



in order to handle rollback :- undo log, redo log

* undo log - this log contains recodes about how to undo the last changes done by a transaction, if any othere transaction need the original data as a part of consistent read operation ,the unmodefed data is retrived from undo log.

* redo log - by defenation the redo log disk base data structure used for crash recovery to correct data writen by incomplet transaction. the changes which could make it upto the data file before the crash or any other region are replayed automatically during restart of server after crash.