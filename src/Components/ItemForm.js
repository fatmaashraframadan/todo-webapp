import React from "react";

const ItemForm = ({ item, onSubmit, onChange }) => (
  <form onSubmit={onSubmit}>
    <div>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={item.name || ""}
        onChange={onChange}
      />
    </div>
    <button type="submit">Save</button>
  </form>
);

export default ItemForm;
