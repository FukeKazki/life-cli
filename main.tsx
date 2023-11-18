import React from "react";
import { Box, render, Text } from "ink";
import { Command } from "cliffy";

const _Test = () => {
  return (
    <>
      <Text color="green">I am green</Text>
      <Text color="black" backgroundColor="white">
        I am black on white
      </Text>
      <Text color="#ffffff">I am white</Text>
      <Text bold>I am bold</Text>
      <Text italic>I am italic</Text>
      <Text underline>I am underline</Text>
      <Text strikethrough>I am strikethrough</Text>
      <Text inverse>I am inversed</Text>

      <Box padding={2} gap={2}>
        <Box borderStyle="single">
          <Text>single</Text>
        </Box>
        <Box borderStyle="double">
          <Text>double</Text>
        </Box>
        <Box borderStyle="singleDouble">
          <Text>single double</Text>
        </Box>
        <Box borderStyle="doubleSingle">
          <Text>double single</Text>
        </Box>
        <Box borderStyle="round">
          <Text>round</Text>
        </Box>
        <Box borderStyle="bold">
          <Text>bold</Text>
        </Box>
      </Box>
    </>
  );
};

const Engineer = () => {
  return (
    <>
      <Box flexDirection="column">
        <Box
          borderStyle="single"
          flexDirection="column"
          paddingY={1}
          paddingX={2}
        >
          <Text bold color="red">
            長期目標
          </Text>
          <Box paddingLeft={2} marginTop={1} flexDirection="column">
            <Text>エンジニアとしての価値向上</Text>
          </Box>
        </Box>
        <Box
          borderStyle="single"
          flexDirection="column"
          paddingY={1}
          paddingX={2}
        >
          <Text bold color="green">
            中期目標
          </Text>
          <Box paddingLeft={2} marginTop={1} flexDirection="column">
            <Text>専門技術の習得</Text>
            <Text>イベント参加</Text>
          </Box>
        </Box>
        <Box
          borderStyle="single"
          flexDirection="column"
          paddingY={1}
          paddingX={2}
        >
          <Text bold color="blue">
            短期目標
          </Text>
          <Box paddingLeft={2} marginTop={1} flexDirection="column">
            <Text>ブログ執筆</Text>
            <Text>技術・フレームワークの基本を学ぶ</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

await new Command()
  .name("life")
  .description("Happy Engineer's Life")
  .version("v1.0.0")
  .command("engineer", "Engineer's Life")
  .action(() => {
    render(<Engineer />);
  })
  .parse(Deno.args);
