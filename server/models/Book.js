const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    author: {
      type: String,
      required: true,
      unique: true,
      
    },
    description: {
      type: String,
      required: true,
    },

    id: {
      type: String,
      required: true,
    },

  }

 
   );

   modules.exports = bookSchema;


