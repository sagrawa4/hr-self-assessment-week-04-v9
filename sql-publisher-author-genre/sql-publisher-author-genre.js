var Schemas = {
  FIX_ME: 'wrong answer',
  OPTION_0: 'option 0',
  OPTION_1: 'option 1',
  OPTION_2: 'option 2',
  OPTION_3: 'option 3',
  OPTION_4: 'option 4',
  OPTION_5: 'option 5',
  OPTION_6: 'option 6'
};

var sqlPublisherAuthorSchema =  Schemas.OPTION_3;
// Since the realtion b/w Publisher and Author is ONE TO MANY i.e A publisher can have many
// Authors, having a PK of publisher as a FK in Author maintains the relation.

var sqlPublisherGenreSchema =  Schemas.OPTION_6; // TODO: Update this constant
// Since the realtion b/w Publisher and Genre is MANY TO MANY i.e A publisher can have many
// Genre and a a Genre can have many publisher, Hence an associaltion table/Join


var sqlAuthorGenreSchema =  Schemas.OPTION_3; // TODO: Update this constant
// Since the realtion b/w Author and Genre is ONE To Many
