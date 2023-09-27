import { useState } from 'react';
import MainLayout from '../../layout/MainLayout';
import Collapsible from '../../shared/Collapsible';
import Input from '../../shared/Input';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { Button, Drawer, Empty, Space, Typography } from 'antd';
import UserTable from './components/UserTable';
import CandidateProgramApplicationCard from './components/CandidateProgramApplicationCard';
import Container from './components/Container';
import ApplicationStage from './components/ApplicationStage';
import { useCandidate } from '../../hooks/CandidateContext';
import { candidates } from '../../shared/data/candidates';

// const candidates = [
//   {
//     name: 'John Smith',
//     location: 'United States',
//     thumbnail:
//       'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80',
//     program: 'Master in Computer Science (2019-2021)',
//     tags: ['#computer_sci', '#graduated'],
//     locations: ['California', 'Technology', 'San Francisco']
//   },
//   {
//     name: 'Maria Garcia',
//     location: 'Spain',
//     thumbnail:
//       'https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80',
//     program: 'Bachelor in Business Administration (2020-2024)',
//     tags: ['#business', '#undergrad'],
//     locations: ['Madrid', 'Business', 'Barcelona']
//   },
//   {
//     name: 'Ahmed Ali',
//     location: 'Egypt',
//     thumbnail:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
//     program: 'Ph.D. in Engineering (2018-2023)',
//     tags: ['#research', '#phd_candidate'],
//     locations: ['Cairo', 'Engineering', 'Alexandria']
//   },
//   {
//     name: 'Emily Johnson',
//     location: 'Canada',
//     thumbnail:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
//     program: 'Bachelor in Environmental Science (2021-2025)',
//     tags: ['#environment', '#undergrad'],
//     locations: ['Toronto', 'Science', 'Vancouver']
//   },
//   {
//     name: 'Daniel Lee',
//     location: 'South Korea',
//     thumbnail:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
//     program: 'Master of Arts in History (2020-2022)',
//     tags: ['#history', '#graduated'],
//     locations: ['Seoul', 'Arts', 'Busan']
//   },
//   {
//     name: 'Aisha Rahman',
//     location: 'Pakistan',
//     thumbnail:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
//     program: 'Bachelor in Medicine (2022-2027)',
//     tags: ['#medicine', '#undergrad'],
//     locations: ['Karachi', 'Healthcare', 'Lahore']
//   },
//   {
//     name: 'Sophia Brown',
//     location: 'United Kingdom',
//     thumbnail:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
//     program: 'Ph.D. in Physics (2019-2024)',
//     tags: ['#physics', '#phd_candidate'],
//     locations: ['London', 'Science', 'Edinburgh']
//   },
//   {
//     name: 'Miguel Hernandez',
//     location: 'Mexico',
//     thumbnail:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
//     program: 'Bachelor in Economics (2021-2025)',
//     tags: ['#economics', '#undergrad'],
//     locations: ['Mexico City', 'Business', 'Guadalajara']
//   },
//   {
//     name: 'Lina Kim',
//     location: 'South Korea',
//     thumbnail:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
//     program: 'Master of Business Administration (2018-2020)',
//     tags: ['#mba', '#graduated'],
//     locations: ['Seoul', 'Business', 'Busan']
//   },
//   {
//     name: 'Abdullah Al-Farsi',
//     thumbnail:
//       'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80',
//     location: 'Saudi Arabia',
//     program: 'Bachelor in Computer Engineering (2020-2024)',
//     tags: ['#computer_eng', '#undergrad'],
//     locations: ['Riyadh', 'Technology', 'Jeddah']
//   }
// ];

const SearchWithFilter = ({
  value,
  setValue
}: {
  value: string;
  setValue: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
      <Space
        onClick={showDrawer}
        className="bg-white border-0 cursor-pointer h-[100%] w-[10%] items-center justify-center p-2.5 rounded-md shadow-primary"
      >
        <FilterOutlined className="text-slate-500 text-[20px]" />
      </Space>

      <Drawer
        title="Applicant Filter"
        placement="right"
        onClose={onClose}
        open={open}
      >
        <Typography.Paragraph>Filter Property 01</Typography.Paragraph>
        <Typography.Paragraph>Filter Property 02</Typography.Paragraph>
      </Drawer>
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

  const { candidate, setCandidate } = useCandidate();

  return (
    <MainLayout>
      <section className={styles.wrapper}>
        <div className="flex gap-6">
          <aside className="w-[35%] relative">
            <ApplicationStage />
            <SearchWithFilter setValue={setSearchTerm} value={searchTerm} />
            <UserTable candidates={filteredCandidates} />
          </aside>
          <div className="w-[65%]">
            {candidate ? (
              <>
                <CandidateProgramApplicationCard />
                <Container />
              </>
            ) : (
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <Typography.Paragraph className="w-[50%] mx-auto text-slate-400 text-center">
                    No candidate is selected yet. Click on a candidate from the
                    list on the left to view their information.
                  </Typography.Paragraph>
                }
              />
            )}
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
