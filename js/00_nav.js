'use strict';

(function () {
    const sideNav = document.getElementById('sideNav');

    if (!sideNav) {
        return;
    }

    const currentPath = normalizePath(window.location.pathname);
    const rootPrefix = getRootPrefix(currentPath);

    const navGroups = [
        {
            title: 'Dev Tools',
            className: 'nav-group-tools',
            items: [
                {
                    label: 'Git / GitHub',
                    folder: 'GitGithub',
                    children: [
                        { label: '00. Git/GitHub 전체 로드맵', path: 'GitGithub/00_git_github_index.html', folder: 'GitGithub', match: 'page' },
                        { label: '01. Git과 버전 관리 개념', path: 'GitGithub/01_git_version_control.html', folder: 'GitGithub', match: 'page' },
                        { label: '02. Git 작업 공간 구조 이해', path: 'GitGithub/02_git_workflow_structure.html', folder: 'GitGithub', match: 'page' },
                        { label: '03. Eclipse에서 Git 사용자 설정하기', path: 'GitGithub/03_git_eclipse_config.html', folder: 'GitGithub', match: 'page' },
                        { label: '04. 로컬 저장소 만들기', path: 'GitGithub/04_git_local_repository.html', folder: 'GitGithub', match: 'page' },
                        { label: '05. Add / Staging / Commit 기본 흐름', path: 'GitGithub/05_git_add_commit.html', folder: 'GitGithub', match: 'page' },
                        { label: '06. 커밋 히스토리와 커밋 메시지', path: 'GitGithub/06_git_history_commit_message.html', folder: 'GitGithub', match: 'page' },
                        { label: '07. Reset으로 이전 커밋 상태로 되돌리기', path: 'GitGithub/07_git_reset.html', folder: 'GitGithub', match: 'page' },
                        { label: '08. Revert / Restore / Reset 비교', path: 'GitGithub/08_git_revert_restore.html', folder: 'GitGithub', match: 'page' },
                        { label: '09. GitHub 원격 저장소 만들기', path: 'GitGithub/09_github_remote_repository.html', folder: 'GitGithub', match: 'page' },
                        { label: '10. 로컬 저장소와 GitHub 연결하기', path: 'GitGithub/10_git_remote_push_token.html', folder: 'GitGithub', match: 'page' },
                        { label: '11. 원격 저장소 프로젝트 가져오기', path: 'GitGithub/11_git_clone_import.html', folder: 'GitGithub', match: 'page' },
                        { label: '12. Pull / Fetch / Merge로 버전 맞추기', path: 'GitGithub/12_git_pull_fetch_merge.html', folder: 'GitGithub', match: 'page' },
                        { label: '13. Git 충돌 Conflict 해결하기', path: 'GitGithub/13_git_conflict.html', folder: 'GitGithub', match: 'page' },
                        { label: '14. Branch 생성과 Merge', path: 'GitGithub/14_git_branch_merge.html', folder: 'GitGithub', match: 'page' },
                        { label: '15. Fork / PR / Collaborator 팀 작업', path: 'GitGithub/15_github_team_workflow.html', folder: 'GitGithub', match: 'page' },
                        { label: '16. CLI / VS Code / .gitignore 실무 정리', path: 'GitGithub/16_git_cli_vscode_gitignore.html', folder: 'GitGithub', match: 'page' }
                    ]
                }
            ]
        },
        {
            title: 'DB',
            className: 'nav-group-db',
            items: [
                {
                    label: 'Oracle Database SQL Developer',
                    folder: 'OracleSqlDeveloper',
                    children: [
                        { label: '00. Database 학습 로드맵', path: 'OracleSqlDeveloper/00_database_roadmap.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '01. Oracle 설치와 SQL Developer 접속', path: 'OracleSqlDeveloper/01_oracle_install.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '02. Oracle 삭제와 재설치 준비', path: 'OracleSqlDeveloper/02_oracle_uninstall.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '03. Multi Tenant, CDB, PDB 이해', path: 'OracleSqlDeveloper/03_multitenant_cdb_pdb.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '04. SCOTT / HR 계정과 샘플 스키마', path: 'OracleSqlDeveloper/04_scott_hr_sample_schema.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '05. Oracle 기본 명령어', path: 'OracleSqlDeveloper/05_oracle_basic_commands.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '06. Oracle 자료형', path: 'OracleSqlDeveloper/06_oracle_datatype.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '07. SQL의 종류', path: 'OracleSqlDeveloper/07_sql_category.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '08. SELECT 기본 조회', path: 'OracleSqlDeveloper/08_select_basic.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '09. WHERE 조건절과 SQL 연산자', path: 'OracleSqlDeveloper/09_where_operator.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '10. ORDER BY 정렬', path: 'OracleSqlDeveloper/10_order_by.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '11. 그룹 함수와 GROUP BY', path: 'OracleSqlDeveloper/11_group_function.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '12. INNER JOIN', path: 'OracleSqlDeveloper/12_inner_join.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '13. OUTER JOIN과 SELF JOIN', path: 'OracleSqlDeveloper/13_outer_self_join.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '14. SUBQUERY', path: 'OracleSqlDeveloper/14_subquery.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '15. TOP-N 쿼리와 페이징', path: 'OracleSqlDeveloper/15_top_n_query.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '16. 테이블 생성과 제약조건', path: 'OracleSqlDeveloper/16_create_table_constraint.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '17. ALTER, DROP, TRUNCATE', path: 'OracleSqlDeveloper/17_alter_drop_truncate.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '18. SEQUENCE', path: 'OracleSqlDeveloper/18_sequence.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '19. INSERT, UPDATE, DELETE', path: 'OracleSqlDeveloper/19_insert_update_delete.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '20. TRANSACTION', path: 'OracleSqlDeveloper/20_transaction.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '21. VIEW', path: 'OracleSqlDeveloper/21_view.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '22. INDEX', path: 'OracleSqlDeveloper/22_index.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '23. 사용자 생성과 권한', path: 'OracleSqlDeveloper/23_user_privilege.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '24. Oracle 내장 함수', path: 'OracleSqlDeveloper/24_builtin_function.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '25. 분석 함수', path: 'OracleSqlDeveloper/25_analytic_function.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '26. PL/SQL 기초', path: 'OracleSqlDeveloper/26_plsql_basic.html', folder: 'OracleSqlDeveloper', match: 'page' },
                        { label: '27. PL/SQL 예외 처리와 프로시저', path: 'OracleSqlDeveloper/27_plsql_exception_procedure.html', folder: 'OracleSqlDeveloper', match: 'page' }
                    ]
                },
                {
                    label: 'Database Modeling',
                    folder: 'DatabaseModeling',
                    children: [
                        { label: '01. 데이터베이스 모델링 기초', path: 'DatabaseModeling/01_database_modeling_basic.html', folder: 'DatabaseModeling', match: 'page' },
                        { label: '02. ERD와 엔터티 관계', path: 'DatabaseModeling/02_erd_relationship.html', folder: 'DatabaseModeling', match: 'page' },
                        { label: '03. 정규화와 Mapping Rule', path: 'DatabaseModeling/03_normalization.html', folder: 'DatabaseModeling', match: 'page' },
                        { label: '04. 물리 모델링과 인덱스', path: 'DatabaseModeling/04_physical_modeling_index.html', folder: 'DatabaseModeling', match: 'page' },
                        { label: '05. 프로젝트 DB 설계 실습', path: 'DatabaseModeling/05_project_database_design.html', folder: 'DatabaseModeling', match: 'page' }
                    ]
                }
            ]
        },
        {
            title: 'Backend',
            className: 'nav-group-backend',
            items: [
                {
                    label: 'Java Basics / 자바기초교안',
                    folder: 'JavaBasics',
                    children: [
                        { label: '01. Java 개발환경', path: 'JavaBasics/01_jdk.html', folder: 'JavaBasics', match: 'page' },
                        { label: '02. JDK, JRE, JVM 실행 구조', path: 'JavaBasics/02_jvm.html', folder: 'JavaBasics', match: 'page' },
                        { label: '03. Java 프로그램 구조', path: 'JavaBasics/03_program_structure.html', folder: 'JavaBasics', match: 'page' },
                        { label: '04. 주석과 문서화 주석', path: 'JavaBasics/04_comment.html', folder: 'JavaBasics', match: 'page' },
                        { label: '05. 변수', path: 'JavaBasics/05_variable.html', folder: 'JavaBasics', match: 'page' },
                        { label: '06. 자료형', path: 'JavaBasics/06_data_type.html', folder: 'JavaBasics', match: 'page' },
                        { label: '07. 상수', path: 'JavaBasics/07_constant.html', folder: 'JavaBasics', match: 'page' },
                        { label: '08. 형변환', path: 'JavaBasics/08_casting.html', folder: 'JavaBasics', match: 'page' },
                        { label: '09. Escape 문자', path: 'JavaBasics/09_escape.html', folder: 'JavaBasics', match: 'page' },
                        { label: '10. 연산자', path: 'JavaBasics/10_operator.html', folder: 'JavaBasics', match: 'page' },
                        { label: '11. 제어문', path: 'JavaBasics/11_control.html', folder: 'JavaBasics', match: 'page' },
                        { label: '12. Wrapper 클래스', path: 'JavaBasics/12_wrapper.html', folder: 'JavaBasics', match: 'page' },
                        { label: '13. 배열', path: 'JavaBasics/13_array.html', folder: 'JavaBasics', match: 'page' },
                        { label: '14. 객체지향 프로그래밍', path: 'JavaBasics/14_oop.html', folder: 'JavaBasics', match: 'page' },
                        { label: '15. 클래스와 객체', path: 'JavaBasics/15_class.html', folder: 'JavaBasics', match: 'page' },
                        { label: '16. 접근 지정자', path: 'JavaBasics/16_access_modifier.html', folder: 'JavaBasics', match: 'page' },
                        { label: '17. 캡슐화', path: 'JavaBasics/17_encapsulation.html', folder: 'JavaBasics', match: 'page' },
                        { label: '18. this와 super', path: 'JavaBasics/18_this_super.html', folder: 'JavaBasics', match: 'page' },
                        { label: '19. 생성자', path: 'JavaBasics/19_constructor.html', folder: 'JavaBasics', match: 'page' },
                        { label: '20. 상속', path: 'JavaBasics/20_inheritance.html', folder: 'JavaBasics', match: 'page' },
                        { label: '21. 다형성', path: 'JavaBasics/21_polymorphism.html', folder: 'JavaBasics', match: 'page' },
                        { label: '22. static block', path: 'JavaBasics/22_static_block.html', folder: 'JavaBasics', match: 'page' },
                        { label: '23. 패키지', path: 'JavaBasics/23_package.html', folder: 'JavaBasics', match: 'page' },
                        { label: '24. 컬렉션', path: 'JavaBasics/24_collection.html', folder: 'JavaBasics', match: 'page' },
                        { label: '25. 추상 클래스', path: 'JavaBasics/25_abstract_class.html', folder: 'JavaBasics', match: 'page' },
                        { label: '26. final 지정자', path: 'JavaBasics/26_final.html', folder: 'JavaBasics', match: 'page' },
                        { label: '27. 인터페이스', path: 'JavaBasics/27_interface.html', folder: 'JavaBasics', match: 'page' },
                        { label: '28. 예외 처리', path: 'JavaBasics/28_exception.html', folder: 'JavaBasics', match: 'page' },
                        { label: '29. 내부 클래스', path: 'JavaBasics/29_inner_class.html', folder: 'JavaBasics', match: 'page' },
                        { label: '30. 스레드', path: 'JavaBasics/30_thread.html', folder: 'JavaBasics', match: 'page' },
                        { label: '31. 람다식', path: 'JavaBasics/31_lambda.html', folder: 'JavaBasics', match: 'page' },
                        { label: '32. Stream API', path: 'JavaBasics/32_stream.html', folder: 'JavaBasics', match: 'page' },
                        { label: '33. 정규표현식', path: 'JavaBasics/33_regular_expression.html', folder: 'JavaBasics', match: 'page' },
                        { label: '34. 입력/출력', path: 'JavaBasics/34_input_output.html', folder: 'JavaBasics', match: 'page' }
                    ]
                },
                {
                    label: 'Spring Boot',
                    folder: 'SpringBoot',
                    children: [
                        { label: '01. Spring Boot 통합 로드맵', path: 'SpringBoot/01_springboot_roadmap.html', folder: 'SpringBoot', match: 'page' },
                        { label: '02. JDBC 기본 흐름', path: 'SpringBoot/02_jdbc_basic_flow.html', folder: 'SpringBoot', match: 'page' },
                        { label: '03. JDBC 쿼리 실행과 ResultSet', path: 'SpringBoot/03_jdbc_query_resultset.html', folder: 'SpringBoot', match: 'page' },
                        { label: '04. JDBC 트랜잭션과 자원 반납', path: 'SpringBoot/04_jdbc_transaction_resource.html', folder: 'SpringBoot', match: 'page' },
                        { label: '05. Generic 기본', path: 'SpringBoot/05_generic_basic.html', folder: 'SpringBoot', match: 'page' },
                        { label: '06. Generic 와일드카드와 제한 타입', path: 'SpringBoot/06_generic_wildcard_bounded.html', folder: 'SpringBoot', match: 'page' },
                        { label: '07. Spring Framework와 Boot', path: 'SpringBoot/07_spring_framework_boot.html', folder: 'SpringBoot', match: 'page' },
                        { label: '08. Spring Boot 프로젝트 구조와 설정', path: 'SpringBoot/08_springboot_project_config.html', folder: 'SpringBoot', match: 'page' },
                        { label: '09. Spring MVC와 Controller', path: 'SpringBoot/09_spring_mvc_controller.html', folder: 'SpringBoot', match: 'page' },
                        { label: '10. Validation과 Exception', path: 'SpringBoot/10_spring_validation_exception.html', folder: 'SpringBoot', match: 'page' },
                        { label: '11. DataSource와 HikariCP', path: 'SpringBoot/11_datasource_hikaricp.html', folder: 'SpringBoot', match: 'page' },
                        { label: '12. JPA Entity와 Repository CRUD', path: 'SpringBoot/12_jpa_entity_repository_crud.html', folder: 'SpringBoot', match: 'page' },
                        { label: '13. JPA 영속성 컨텍스트와 트랜잭션', path: 'SpringBoot/13_jpa_persistence_transaction.html', folder: 'SpringBoot', match: 'page' },
                        { label: '14. JPA 연관관계·쿼리·DTO', path: 'SpringBoot/14_jpa_relation_query_dto.html', folder: 'SpringBoot', match: 'page' },
                        { label: '15. Thymeleaf 표현식', path: 'SpringBoot/15_thymeleaf_expression.html', folder: 'SpringBoot', match: 'page' },
                        { label: '16. Thymeleaf Fragment와 Utility', path: 'SpringBoot/16_thymeleaf_fragment_utility.html', folder: 'SpringBoot', match: 'page' },
                        { label: '17. RestTemplate', path: 'SpringBoot/17_resttemplate.html', folder: 'SpringBoot', match: 'page' },
                        { label: '18. Filter·Interceptor·AOP', path: 'SpringBoot/18_filter_interceptor_aop.html', folder: 'SpringBoot', match: 'page' },
                        { label: '19. JWT 개념', path: 'SpringBoot/19_jwt_concept.html', folder: 'SpringBoot', match: 'page' },
                        { label: '20. Spring Security + JWT', path: 'SpringBoot/20_spring_security_jwt.html', folder: 'SpringBoot', match: 'page' }
                    ]
                }
            ]
        },
        {
            title: 'Frontend',
            className: 'nav-group-frontend',
            items: [
                {
                    label: 'HTML5 & CSS3',
                    folder: 'HTML5&CSS3',
                    children: [
                        { label: '01. HTML5', path: 'HTML5&CSS3/01_html.html', folder: 'HTML5&CSS3', match: 'page' },
                        { label: '02. CSS3', path: 'HTML5&CSS3/02_css.html', folder: 'HTML5&CSS3', match: 'page' },
                        { label: '03. Media', path: 'HTML5&CSS3/03_media.html', folder: 'HTML5&CSS3', match: 'page' },
                        { label: '04. Contact', path: 'HTML5&CSS3/04_contact.html', folder: 'HTML5&CSS3', match: 'page' },
                        { label: '05. Regular Expression', path: 'HTML5&CSS3/05_regular_expression.html', folder: 'HTML5&CSS3', match: 'page' },
                        { label: '06. Flexbox', path: 'HTML5&CSS3/06_flexbox.html', folder: 'HTML5&CSS3', match: 'page' }
                    ]
                },
                {
                    label: 'ES6 JavaScript',
                    folder: 'ES6',
                    children: [
                        { label: '00. ES6 학습 로드맵', path: 'ES6/00_es6_roadmap.html', folder: 'ES6', match: 'page' },
                        { label: '01. let, const, Scope', path: 'ES6/01_let_const_scope.html', folder: 'ES6', match: 'page' },
                        { label: '02. Template Literals', path: 'ES6/02_template_literals.html', folder: 'ES6', match: 'page' },
                        { label: '03. this 키워드', path: 'ES6/03_this.html', folder: 'ES6', match: 'page' },
                        { label: '04. Arrow Function', path: 'ES6/04_arrow_function.html', folder: 'ES6', match: 'page' },
                        { label: '05. for...of, 함수, 배열 메서드', path: 'ES6/05_forof_function_array.html', folder: 'ES6', match: 'page' },
                        { label: '06. Class', path: 'ES6/06_class.html', folder: 'ES6', match: 'page' },
                        { label: '07. import와 export', path: 'ES6/07_import_export.html', folder: 'ES6', match: 'page' },
                        { label: '08. Spread와 Rest', path: 'ES6/08_spread_rest.html', folder: 'ES6', match: 'page' },
                        { label: '09. Computed Property Name', path: 'ES6/09_computed_property.html', folder: 'ES6', match: 'page' },
                        { label: '10. Destructuring Assignment', path: 'ES6/10_destructuring.html', folder: 'ES6', match: 'page' },
                        { label: '11. Shorthand, Method, 객체 복사', path: 'ES6/11_shorthand_method_copy.html', folder: 'ES6', match: 'page' },
                        { label: '12. Promise', path: 'ES6/12_promise.html', folder: 'ES6', match: 'page' },
                        { label: '13. async / await', path: 'ES6/13_async_await.html', folder: 'ES6', match: 'page' },
                        { label: '14. ES6 실전 종합 정리', path: 'ES6/14_es6_practice_summary.html', folder: 'ES6', match: 'page' }
                    ]
                },
                {
                    label: 'React.js With Vite',
                    folder: 'React',
                    children: [
                        { label: '00. React 학습 로드맵', path: 'React/00_react_roadmap.html', folder: 'React', match: 'page' },
                        { label: '01. React와 Vite 시작하기', path: 'React/01_react_vite_start.html', folder: 'React', match: 'page' },
                        { label: '02. Vite 프로젝트 구조 읽기', path: 'React/02_vite_project_structure.html', folder: 'React', match: 'page' },
                        { label: '03. React에서 CSS 다루기', path: 'React/03_react_css.html', folder: 'React', match: 'page' },
                        { label: '04. Bootstrap과 UI 라이브러리', path: 'React/04_bootstrap_ui_library.html', folder: 'React', match: 'page' },
                        { label: '05. JSX 완전 이해', path: 'React/05_jsx_complete.html', folder: 'React', match: 'page' },
                        { label: '06. 브라우저 렌더링과 Virtual DOM', path: 'React/06_browser_rendering_virtual_dom.html', folder: 'React', match: 'page' },
                        { label: '07. 컴포넌트 설계', path: 'React/07_component_design.html', folder: 'React', match: 'page' },
                        { label: '08. props, children, state', path: 'React/08_props_children_state.html', folder: 'React', match: 'page' },
                        { label: '09. useState와 폼 입력', path: 'React/09_usestate_form.html', folder: 'React', match: 'page' },
                        { label: '10. useEffect와 useRef', path: 'React/10_useeffect_useref.html', folder: 'React', match: 'page' },
                        { label: '11. useReducer와 useContext', path: 'React/11_usereducer_usecontext.html', folder: 'React', match: 'page' },
                        { label: '12. 최적화와 Custom Hook', path: 'React/12_optimization_custom_hook.html', folder: 'React', match: 'page' },
                        { label: '13. React Router', path: 'React/13_react_router.html', folder: 'React', match: 'page' },
                        { label: '14. REST API 연동과 배포', path: 'React/14_rest_api_deploy.html', folder: 'React', match: 'page' },
                        { label: '15. ES6 모듈 import/export', path: 'React/15_es6_module_import_export.html', folder: 'React', match: 'page' },
                        { label: '16. 개발 환경 오류 해결 노트', path: 'React/16_react_troubleshooting.html', folder: 'React', match: 'page' }
                    ]
                }
            ]
        }
    ];

    renderNavigation();

    function renderNavigation() {
        sideNav.innerHTML = '';
        sideNav.appendChild(
            createLink('Home', '00_index.html', isRootPage(), {
                className: 'home-link'
            })
        );

        navGroups.forEach(function (group) {
            const groupIsActive = group.items.some(isCurrentCategory);
            const details = document.createElement('details');
            details.className = 'nav-group ' + group.className;
            details.open = groupIsActive;

            const summary = document.createElement('summary');
            summary.className = 'nav-group-title';
            summary.textContent = group.title;

            const list = document.createElement('ul');
            list.className = 'nav-group-items';

            group.items.forEach(function (item) {
                list.appendChild(createNavItem(item));
            });

            details.appendChild(summary);
            details.appendChild(list);
            sideNav.appendChild(details);
        });
    }

    function createNavItem(item) {
        const listItem = document.createElement('li');

        if (item.children && item.children.length > 0) {
            const childGroupIsActive = isCurrentCategory(item);
            const details = document.createElement('details');
            details.className = 'nav-sub-group';
            details.open = childGroupIsActive;

            const summary = document.createElement('summary');
            summary.className = 'nav-sub-group-title';
            summary.textContent = item.label;

            const childList = document.createElement('ul');
            childList.className = 'nav-sub-group-items';

            item.children.forEach(function (childItem) {
                childList.appendChild(createNavItem(childItem));
            });

            details.appendChild(summary);
            details.appendChild(childList);
            listItem.appendChild(details);

            return listItem;
        }

        const itemIsActive = isCurrentCategory(item);
        const itemIsCurrentPage = isCurrentPage(item.path);

        listItem.appendChild(
            createLink(item.label, item.path, itemIsActive, {
                className: 'nav-sub-item',
                disableWhenActive: itemIsCurrentPage,
                ariaCurrent: itemIsCurrentPage ? 'page' : false
            })
        );

        return listItem;
    }

    function createLink(label, path, isActive, options) {
        const settings = options || {};
        const link = document.createElement('a');
        link.textContent = label;
        link.href = isActive && settings.disableWhenActive !== false ? '#' : rootPrefix + path;

        if (settings.className) {
            settings.className.split(/\s+/).forEach(function (className) {
                if (className) {
                    link.classList.add(className);
                }
            });
        }

        if (path === '00_index.html' && !settings.className) {
            link.classList.add('home-link');
        }

        if (isActive) {
            link.classList.add('active');

            if (settings.ariaCurrent !== false) {
                link.setAttribute('aria-current', settings.ariaCurrent || 'page');
            }

            if (settings.disableWhenActive !== false) {
                link.addEventListener('click', function (event) {
                    event.preventDefault();
                });
            }
        }

        return link;
    }

    function isRootPage() {
        return currentPath.endsWith('/00_index.html') || currentPath.endsWith('/');
    }

    function isCurrentPage(relativePath) {
        return currentPath.endsWith('/' + normalizePath(relativePath));
    }

    function isCurrentCategory(item) {
        if (item.children && item.children.length > 0) {
            return item.children.some(isCurrentCategory);
        }

        if (item.match === 'page') {
            return isCurrentPage(item.path);
        }

        return isCurrentPage(item.path) || currentPath.includes('/' + normalizePath(item.folder) + '/');
    }

    function getRootPrefix(path) {
        if (
            path.includes('/HTML5&CSS3/') ||
            path.includes('/JavaBasics/') ||
            path.includes('/DatabaseModeling/') ||
            path.includes('/GitGithub/') ||
            path.includes('/ES6/') ||
            path.includes('/SpringBoot/') ||
            path.includes('/OracleSqlDeveloper/') ||
            path.includes('/React/') ||
            path.includes('/studypages/')
        ) {
            return '../';
        }

        return './';
    }

    function normalizePath(path) {
        return decodeURIComponent(path).replace(/\\/g, '/');
    }
})();
