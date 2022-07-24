import Select from '@components/common/Select';
import { useState } from 'react';

const Projects = () => {
  const [type, setType] = useState<string | number | null>(null);

  return (
    <main css={{ height: '100%', marginBottom: '32px' }}>
      <Select
        placeholder="Выберите отрасль"
        onChange={value => setType(value)}
        items={[
          { label: 'first', value: 'a1' },
          { label: 'second', value: 2 },
          { label: 'third', value: 'c3' },
        ]}
      />
      <p>{type}</p>
    </main>
  );
};

export default Projects;
