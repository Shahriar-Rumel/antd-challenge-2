import {
  Space,
  Typography,
  Divider as AntDivider,
  Card,
  Button,
  Popover,
  Checkbox,
  Row,
  Col,
  Tabs,
  Tag
} from 'antd';
import { Icon } from '@iconify/react';
import Divider from '../../../shared/Divider';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Fragment, useState } from 'react';
import { useCandidate } from '../../../hooks/CandidateContext';

const { Text } = Typography;

enum QuestionTypes {
  Paragraph = 'paragraph',
  ShortAnswer = 'shortAnswer',
  YesNo = 'yesNo',
  DropdownSelect = 'dropdownSelect',
  MultipleChoice = 'multipleChoice',
  Date = 'date',
  Number = 'number',
  FileUpload = 'fileUpload',
  Video = 'video'
}

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
const enrolledInformation = [
  {
    icon: 'ph:books-thin',
    title: 'Misk Traineeship',
    value: 'Currently At Video Task',
    tag: 'Active'
  },
  {
    icon: 'ph:books-thin',
    title: 'Summer Internship',
    value: 'Currently At Video Task',
    tag: 'Disqualified'
  },
  {
    icon: 'ph:books-thin',
    title: 'XYZ Traineeship',
    value: 'Currently At Video Task',
    tag: 'Disqualified'
  },
  {
    icon: 'ph:books-thin',
    title: 'London Internship',
    value: 'Currently At Video Task',
    tag: 'Active'
  }
];

const ProfileInformationCard = ({ informations, showDivider }: any) => {
  const { candidate } = useCandidate();
  return (
    <Card className="bg-white w-[100%] border-0 rounded-md px-4 py-2 mt-3">
      <Text className="text-[14px] font-semibold">Personal Information</Text>
      <Space className="grid grid-cols-2 gap-[24px] mt-6">
        {candidate?.personal?.map((section: any, index: any) => (
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
      className="bg-white w-[100%] border-0 rounded-md px-4 py-2 mt-3"
    >
      <Text className="text-[14px] font-semibold">{title}</Text>
      <Space direction="vertical" className="gap-[8px] mt-6 w-[100%]">
        {informations.map((section: any, index: any) => (
          <Fragment key={index}>
            <Space className="relative w-[100%]">
              <Space className="gap-4">
                <Space className="border-slate-100 border-[1px] rounded-md p-2">
                  <Icon icon={section.icon} className="text-[16px]" />
                </Space>
                <Space direction="vertical">
                  <Space>
                    <Text className="text-slate-800 text-[14px] font-medium">
                      {section.title}
                    </Text>
                  </Space>
                  {section.tag && (
                    <Tag
                      className={`absolute text-[10px] rounded-full px-4 right-0 top-0 ${
                        section.tag === 'Active'
                          ? 'bg-green-100 text-green-600 border-green-500'
                          : 'bg-red-100 text-red-600 border-red-500'
                      }`}
                    >
                      {section.tag}
                    </Tag>
                  )}
                  <Space split={<Divider />}>
                    <Text className="text-slate-800 font-regular text-[14px]">
                      {section.value}
                    </Text>
                    {section.country && (
                      <Text className="text-slate-400 font-light text-[14px]">
                        {section.country}
                      </Text>
                    )}
                    {section.duration && (
                      <Text className="text-slate-400 font-light text-[14px]">
                        {section.duration}
                      </Text>
                    )}
                  </Space>
                </Space>
              </Space>
            </Space>
            {index < informations.length - 1 && <AntDivider />}
          </Fragment>
        ))}
      </Space>
    </Card>
  );
};

const ResumeCard = () => {
  return (
    <Card className="bg-white w-[100%] border-0 rounded-md px-4 py-2 mt-3">
      <Space className="justify-between w-[100%]">
        <Text className="text-[14px] font-semibold">Resume</Text>
        <Space>
          <Button className="border-slate-100 border-[1px] p-2 rounded-md">
            <Icon icon="carbon:view" className="text-[16px]" />
          </Button>
          <Button className="border-slate-100 border-[1px] p-2 rounded-md">
            <Icon
              icon="heroicons:document-arrow-down"
              className="text-[16px]"
            />
          </Button>
        </Space>
      </Space>
      <Space className="h-[800px] w-[100%] mt-4 rounded-md bg-slate-100 items-center justify-center text-slate-400">
        Resume Content
      </Space>
    </Card>
  );
};

const Dropdown = ({ list, setList }: any) => {
  const options = [
    { label: 'Paragraph', value: QuestionTypes.Paragraph },
    { label: 'Short Answer', value: QuestionTypes.ShortAnswer },
    { label: 'Yes/No', value: QuestionTypes.YesNo },
    { label: 'Dropdown Select', value: QuestionTypes.DropdownSelect },
    { label: 'Multiple Choice', value: QuestionTypes.MultipleChoice },
    { label: 'Date', value: QuestionTypes.Date },
    { label: 'Number', value: QuestionTypes.Number },
    { label: 'File Upload', value: QuestionTypes.FileUpload },
    { label: 'Video', value: QuestionTypes.Video }
  ];

  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log(checkedValues);
    setList(checkedValues);
  };
  console.log(list);
  return (
    <>
      <Checkbox.Group
        // options={options}
        defaultValue={[...list]}
        onChange={onChange}
        className="w-[100%]"
      >
        <Space direction="vertical" className="w-[100%]">
          {options.map((option) => (
            <Checkbox
              value={option.value}
              key={option.value}
              className="w-[160px]"
            >
              {option.label}
            </Checkbox>
          ))}
        </Space>
      </Checkbox.Group>
    </>
  );
};

type ContentMap = {
  [QuestionTypes.Paragraph]: string;
  [QuestionTypes.ShortAnswer]: string;
  [QuestionTypes.YesNo]: boolean;
  [QuestionTypes.DropdownSelect]: string;
  [QuestionTypes.MultipleChoice]: string[];
  [QuestionTypes.Date]: string;
  [QuestionTypes.Number]: number;
  [QuestionTypes.FileUpload]: File | null;
  [QuestionTypes.Video]: string;
};

type QuestionAnswerProps = {
  content: ContentMap[keyof ContentMap];
  type: keyof ContentMap;
};

const QuestionAnswer = ({ content, type }: any) => {
  switch (type) {
    case QuestionTypes.Paragraph:
      return (
        <Space className="bg-blue-50 bg-opacity-60 text-cyan-700 px-4 py-2 w-[100%] rounded-md">
          {content}
        </Space>
      );
    case QuestionTypes.ShortAnswer:
      return (
        <Space className="bg-blue-50 bg-opacity-60 text-cyan-700 px-4 py-2 text-[12px] w-[100%] rounded-md">
          {content}
        </Space>
      );
    case QuestionTypes.YesNo:
      return (
        <Space className="bg-blue-50 bg-opacity-60 text-cyan-700 px-4 py-2 text-[12px] w-[100%] rounded-md">
          {content}
        </Space>
      );
    case QuestionTypes.DropdownSelect:
      return (
        <Space className="bg-blue-50 bg-opacity-60 text-cyan-700 px-4 py-2 text-[12px] w-[100%] rounded-md">
          {content}
        </Space>
      );
    case QuestionTypes.MultipleChoice:
      return (
        <Space className="gap-4">
          {content.map((item: string) => (
            <Text
              key={item}
              className="bg-blue-50 text-cyan-700 px-2 py-1 rounded-full text-[12px]"
            >
              {item}
            </Text>
          ))}
        </Space>
      );
    case QuestionTypes.Date:
      return (
        <Space className="bg-blue-50 bg-opacity-60 text-cyan-700 px-4 py-2 text-[12px] w-[100%] rounded-md">
          {content}
        </Space>
      );
    case QuestionTypes.Number:
      return (
        <Space className="bg-blue-50 bg-opacity-60 text-cyan-700 px-4 py-2 text-[12px] w-[100%] rounded-md">
          {content}
        </Space>
      );
    case QuestionTypes.FileUpload:
      return (
        <Space className="bg-blue-50 bg-opacity-60 text-cyan-700 px-4 py-2 text-[12px] w-[100%] rounded-md">
          {content}
        </Space>
      );
    case QuestionTypes.Video:
      return (
        <Space>
          <video
            autoPlay={false}
            controls
            src="https://rumelshahriar.com/assets/youthAward/youthAwards.mp4"
          ></video>
        </Space>
      );
    default:
      return null;
  }
};

type TypeToColorMap = {
  [key in QuestionTypes]: string;
};

type QuestionProps = {
  content: string | string[];
  question: string;
  label: string;
  type: QuestionTypes;
};
const Question = ({ content, question, label, type }: QuestionProps) => {
  const typeToColor: TypeToColorMap = {
    [QuestionTypes.Paragraph]: 'bg-sky-100 text-sky-500',
    [QuestionTypes.ShortAnswer]: 'bg-yellow-100 text-yellow-500',
    [QuestionTypes.YesNo]: 'bg-pink-100 text-pink-500',
    [QuestionTypes.DropdownSelect]: 'bg-cyan-100 text-cyan-500',
    [QuestionTypes.MultipleChoice]: 'bg-lime-100 text-lime-500',
    [QuestionTypes.Date]: 'bg-orange-100 text-orange-500',
    [QuestionTypes.Number]: 'bg-rose-100 text-rose-500',
    [QuestionTypes.FileUpload]: 'bg-zinc-100 text-zinc-500',
    [QuestionTypes.Video]: 'bg-blue-100 text-blue-500'
  };
  return (
    <Space direction="vertical" className="w-[100%] mt-6">
      <Space className="border-b-[1px] w-[96%] py-1 h-[100%] ml-[26px]">
        <Text
          className={`${typeToColor[type]} text-[12px] px-2 rounded-tl-md rounded-tr-md py-1.5`}
        >
          {label}
        </Text>
      </Space>
      <Space direction="horizontal" className="w-[100%] mt-2 items-start">
        <div
          className={`w-[12px] h-[12px] ${typeToColor[type]} rounded-full mt-2 mr-2`}
        ></div>
        <Space direction="vertical" className="w-[100%] gap-4">
          <Text className="text-[14px]">{question}</Text>
          <QuestionAnswer content={content} type={type} />
        </Space>
      </Space>
    </Space>
  );
};

const questions = [
  {
    type: QuestionTypes.ShortAnswer,
    label: 'Short Answer',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    type: QuestionTypes.Video,
    label: 'Video Upload',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    type: QuestionTypes.Number,
    label: 'Number',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    type: QuestionTypes.MultipleChoice,
    label: 'Multiple Choice',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: ['New York', 'Los Angeles', 'California']
  },
  {
    type: QuestionTypes.Paragraph,
    label: 'Paragraph',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Dorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    type: QuestionTypes.YesNo,
    label: 'Yes/No',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Yes'
  },
  {
    type: QuestionTypes.DropdownSelect,
    label: 'Dropdown',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'Option 1'
  },
  {
    type: QuestionTypes.Date,
    label: 'Date',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: '2023-09-26'
  },
  {
    type: QuestionTypes.FileUpload,
    label: 'File',
    question:
      'What regions within Saudi Arabia are you available to pursue a traineeship opportunity? You may select multiple options that apply',
    content: 'File.txt'
  }
];

const AdditionalQuestionCard = () => {
  const onChange = (key: string) => {
    console.log(key);
  };
  const [visibleQuestions, setVisibleQuestions] = useState([
    QuestionTypes.ShortAnswer,
    QuestionTypes.Paragraph,
    QuestionTypes.MultipleChoice,
    QuestionTypes.Number
  ]);

  const filteredQuestions = questions.filter((question) =>
    visibleQuestions.includes(question.type)
  );
  return (
    <Card className="bg-white w-[100%] border-0 rounded-md px-4 py-2 mt-3">
      <Space className="justify-between w-[100%]">
        <Text className="text-[14px] font-semibold">Additional Questions</Text>
        <Popover
          content={
            <Dropdown list={visibleQuestions} setList={setVisibleQuestions} />
          }
          trigger="click"
          placement="bottomLeft"
        >
          <Button className="border-slate-200 w-[180px] flex items-center border-[1px] p-2 rounded-md">
            Sort
          </Button>
        </Popover>
      </Space>
      {filteredQuestions.map((question) => (
        <Question
          type={question.type}
          key={question.type}
          label={question.label}
          question={question.question}
          content={question.content}
        />
      ))}
    </Card>
  );
};

const ProfileTab = () => {
  const { candidate } = useCandidate();
  return (
    <Space direction="vertical" className="w-[100%]">
      <ProfileInformationCard informations={personalInformation} />
      <InformationCard informations={candidate?.education} title="Education" />
      <InformationCard
        informations={candidate?.experience}
        title="Work Experience"
      />
      <ResumeCard />
      <AdditionalQuestionCard />
      <InformationCard
        informations={candidate?.enrolled}
        title="Enrolled Other Programs"
      />
    </Space>
  );
};

export default ProfileTab;
