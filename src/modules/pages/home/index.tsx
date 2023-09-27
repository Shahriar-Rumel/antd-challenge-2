import { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import Collapsible from '../../shared/Collapsible';
import Input from '../../shared/Input';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import UserTable from './components/UserTable';
import CandidateProgramApplicationCard from './components/CandidateProgramApplicationCard';
import Container from './components/Container';

const candidates = [
  {
    name: 'John Smith',
    location: 'United States',
    program: 'Master in Computer Science (2019-2021)',
    tags: ['#computer_sci', '#graduated'],
    locations: ['California', 'Technology', 'San Francisco']
  },
  {
    name: 'Maria Garcia',
    location: 'Spain',
    program: 'Bachelor in Business Administration (2020-2024)',
    tags: ['#business', '#undergrad'],
    locations: ['Madrid', 'Business', 'Barcelona']
  },
  {
    name: 'Ahmed Ali',
    location: 'Egypt',
    program: 'Ph.D. in Engineering (2018-2023)',
    tags: ['#research', '#phd_candidate'],
    locations: ['Cairo', 'Engineering', 'Alexandria']
  },
  {
    name: 'Emily Johnson',
    location: 'Canada',
    program: 'Bachelor in Environmental Science (2021-2025)',
    tags: ['#environment', '#undergrad'],
    locations: ['Toronto', 'Science', 'Vancouver']
  },
  {
    name: 'Daniel Lee',
    location: 'South Korea',
    program: 'Master of Arts in History (2020-2022)',
    tags: ['#history', '#graduated'],
    locations: ['Seoul', 'Arts', 'Busan']
  },
  {
    name: 'Aisha Rahman',
    location: 'Pakistan',
    program: 'Bachelor in Medicine (2022-2027)',
    tags: ['#medicine', '#undergrad'],
    locations: ['Karachi', 'Healthcare', 'Lahore']
  },
  {
    name: 'Sophia Brown',
    location: 'United Kingdom',
    program: 'Ph.D. in Physics (2019-2024)',
    tags: ['#physics', '#phd_candidate'],
    locations: ['London', 'Science', 'Edinburgh']
  },
  {
    name: 'Miguel Hernandez',
    location: 'Mexico',
    program: 'Bachelor in Economics (2021-2025)',
    tags: ['#economics', '#undergrad'],
    locations: ['Mexico City', 'Business', 'Guadalajara']
  },
  {
    name: 'Lina Kim',
    location: 'South Korea',
    program: 'Master of Business Administration (2018-2020)',
    tags: ['#mba', '#graduated'],
    locations: ['Seoul', 'Business', 'Busan']
  },
  {
    name: 'Abdullah Al-Farsi',
    location: 'Saudi Arabia',
    program: 'Bachelor in Computer Engineering (2020-2024)',
    tags: ['#computer_eng', '#undergrad'],
    locations: ['Riyadh', 'Technology', 'Jeddah']
  }
];

const SearchWithFilter = ({
  value,
  setValue
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  return (
    <div className="flex gap-4 items-center">
      <Input
        placeholder="Search by name, edu, exp or #tag"
        prefixIcon={<SearchOutlined className="text-[20px] text-slate-400" />}
        title="Extra information"
        onChange={(e) => {
          e.preventDefault();
          setValue(e.target.value);
        }}
      />
      <Button
        icon={<FilterOutlined className="text-slate-500 text-[20px]" />}
        className="bg-white border-0 h-[50px]"
      />
    </div>
  );
};

const Home = (props: any) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCandidates = candidates.filter((candidate) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const nameMatches = candidate.name
      .toLowerCase()
      .includes(lowerCaseSearchTerm);
    const programMatches = candidate.program
      .toLowerCase()
      .includes(lowerCaseSearchTerm);

    const locationMatches = candidate.location
      .toLowerCase()
      .includes(lowerCaseSearchTerm);

    const locationsMatches = candidate.locations.some((location) =>
      location.toLowerCase().includes(lowerCaseSearchTerm)
    );
    const tagMatches = candidate.tags.some((tag) =>
      tag.toLowerCase().includes(lowerCaseSearchTerm)
    );

    return (
      nameMatches ||
      programMatches ||
      locationMatches ||
      locationsMatches ||
      tagMatches
    );
  });

  return (
    <MainLayout>
      <section className={styles.wrapper}>
        <div className="flex gap-6">
          <aside className="w-[35%]">
            <Collapsible />
            <SearchWithFilter setValue={setSearchTerm} value={searchTerm} />
            <UserTable candidates={filteredCandidates} />
          </aside>
          <div className="w-[65%]">
            <CandidateProgramApplicationCard />
            <Container />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const styles = {
  wrapper: 'w-[90%] ml-[100px] mx-auto my-[30px]'
};

export default Home;
