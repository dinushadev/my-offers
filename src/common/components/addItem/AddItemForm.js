import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import AutoComplete from 'material-ui/lib/auto-complete';

import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/SelectField';
import MenuItem from 'material-ui/lib/menus/menu-item';

const AddItemForm = ({item, categories, onSave, onChange, loading, errors}) =>{


  return (
    <form>

        <TextField
          hintText="Item title"
          name="title"
          value={item.title}
          errorText={errors.title}
          floatingLabelText="Item title"
          onChange={onChange} />

          <AutoComplete
            fullWidth={true}
            hintText="Item Category"
            floatingLabelText="Item Category"
            dataSource={categories}
            onUpdateInput={(t) => { console.log(t); this.setState({input2: [t, t + t, t + t + t]}); }}
            onNewRequest={(t) => { console.log('request:' + t); }} />


          <SelectField value={item.condition} floatingLabelText="Condition" name="condition">
            <MenuItem value={1} primaryText="new"/>
            <MenuItem value={2} primaryText="Used"/>
            <MenuItem value={3} primaryText="Other"/>
          </SelectField>

<br />
        <SelectField value={item.location} onChange={onChange} floatingLabelText="Location" name="location">
            <MenuItem value={1} primaryText="new"/>
            <MenuItem value={2} primaryText="Used"/>
            <MenuItem value={3} primaryText="Other"/>
          </SelectField>


          <TextField
            hintText="Discription"
            name="discription"
            floatingLabelText="Discription"
            onChange={onChange}
            multiLine={true} />



    </form>
  );
};

AddItemForm.propTypes = {
};

export default AddItemForm;
