import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

/**
 * graphql 조각을 바탕으로 typescript class file 을 생성하는 기능입니다.
 * npm run generate:graphql
 * 위의 명령어로 src/autogen/schema.graphql.ts 파일을 새로 생성할 수 있습니다.
 * modules.ts 에 있는 설정값이랑 같아야합니다.
 */
// tslint:disable:no-console
(async () => {
  console.log('----------------------------------------------------------------------------------------------------');
  console.log('Start creating classes according to graphql schema defined in each modules...');
  await new GraphQLDefinitionsFactory().generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/graphql.schema.ts'),
    outputAs: 'class',
  });
  console.log('Finished successfully.');
  console.log('----------------------------------------------------------------------------------------------------');
})();
