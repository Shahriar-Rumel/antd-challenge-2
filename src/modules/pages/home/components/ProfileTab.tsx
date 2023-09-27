import { Space, Typography, Divider as AntDivider, Card } from 'antd';
import { Icon } from '@iconify/react';
import Divider from '../../../shared/Divider';

const { Text } = Typography;

const personalInformation = [
  {
    icon: 'solar:user-circle-linear',
    title: 'Nationality',
    value: 'Sri Lankan'
  },
  {
    icon: 'teenyicons:user-square-outline',
    title: 'National ID',
    value: '00000000000'
  },
  {
    icon: 'ci:user-02',
    title: 'Gender',
    value: 'Female'
  },
  {
    icon: 'ci:calendar-event',
    title: 'Date of Birth',
    value: '00-00-0000'
  }
];

const educationInformation = [
  {
    icon: 'ph:buildings-light',
    title: 'Bachelor in Biochemistry',
    value: 'King Saud University',
    country: 'Saudi Arabia',
    duration: 'Jan 2022 - Jan 2023'
  },
  {
    icon: 'ph:buildings-light',
    title: 'Bachelor in Biochemistry',
    value: 'King Saud University',
    country: 'Saudi Arabia',
    duration: 'Jan 2022 - Jan 2023'
  }
];
const experienceInformation = [
  {
    icon: 'material-symbols:work-outline',
    title: 'Cyber Security Intern',
    value: 'Coop Training',
    country: 'Saudi Arabia',
    duration: 'Jan 2022 - Jan 2023'
  },
  {
    icon: 'material-symbols:work-outline',
    title: 'Cyber Security Intern',
    value: 'Coop Training',
    country: 'Saudi Arabia',
    duration: 'Jan 2022 - Jan 2023'
  }
];

const ProfileInformationCard = ({ informations, showDivider }: any) => {
  return (
    <Card className="bg-white w-[100%] border-0 rounded-md px-4 py-6 mt-3">
      <Text className="text-[14px] font-semibold">Personal Information</Text>
      <Space className="grid grid-cols-2 gap-[24px] mt-6">
        {informations.map((section: any, index: any) => (
          <Space key={index}>
            <Space className="gap-4">
              <Space className="border-slate-100 border-[1px] rounded-md p-2">
                <Icon icon={section.icon} className="text-[16px]" />
              </Space>
              <Space direction="vertical">
                <Text className="text-slate-500 text-[14px]">
                  {section.title}
                </Text>
                <Text className="text-slate-800 font-medium text-[14px]">
                  {section.value}
                </Text>
              </Space>
            </Space>
          </Space>
        ))}
      </Space>
    </Card>
  );
};

const InformationCard = ({ informations, title }: any) => {
  return (
    <Card
      // direction="vertical"
      className="bg-white w-[100%] border-0 rounded-md px-4 py-6 mt-3"
    >
      <Text className="text-[14px] font-semibold">{title}</Text>
      <Space direction="vertical" className="gap-[8px] mt-6 w-[100%]">
        {informations.map((section: any, index: any) => (
          <>
            <Space key={index}>
              <Space className="gap-4">
                <Space className="border-slate-100 border-[1px] rounded-md p-2">
                  <Icon icon={section.icon} className="text-[16px]" />
                </Space>
                <Space direction="vertical">
                  <Text className="text-slate-800 text-[14px] font-medium">
                    {section.title}
                  </Text>
                  <Space split={<Divider />}>
                    <Text className="text-slate-800 font-regular text-[14px]">
                      {section.value}
                    </Text>
                    <Text className="text-slate-400 font-light text-[14px]">
                      {section.country}
                    </Text>
                    <Text className="text-slate-400 font-light text-[14px]">
                      {section.duration}
                    </Text>
                  </Space>
                </Space>
              </Space>
            </Space>
            {index < informations.length - 1 && <AntDivider />}
          </>
        ))}
      </Space>
    </Card>
  );
};

const ResumeCard = () => {
  return <Card></Card>;
};

const ProfileTab = () => {
  return (
    <Space direction="vertical" className="w-[100%]">
      <ProfileInformationCard informations={personalInformation} />
      <InformationCard informations={educationInformation} title="Education" />
      <InformationCard
        informations={experienceInformation}
        title="Work Experience"
      />
    </Space>
  );
};

export default ProfileTab;
