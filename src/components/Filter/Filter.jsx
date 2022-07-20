import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  const filterId = nanoid();
  return (
    <div>
      <label htmlFor={filterId}>
        Find contacts by name
        <input
          value={value}
          type="text"
          name="filter"
          id={filterId}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
