"use strict";

(function () {
    const sideNav = document.getElementById("sideNav");

    if (!sideNav) {
        return;
    }

    const currentPath = normalizePath(window.location.pathname);
    const rootPrefix = getRootPrefix(currentPath);

    const navGroups = [
        {
            title: "HTML5 & CSS3",
            items: [
                { label: "01. HTML5", path: "HTML5&CSS3/01_html.html" },
                { label: "02. CSS3", path: "HTML5&CSS3/02_css.html" },
                { label: "03. Media", path: "HTML5&CSS3/03_media.html" },
                { label: "04. Contact", path: "HTML5&CSS3/04_contact.html" },
                { label: "05. Regular Expression", path: "HTML5&CSS3/05_regular_expression.html" }
            ]
        },
        {
            title: "자바기초교안",
            items: [
                { label: "01. Java 개발환경", path: "JavaBasics/01_jdk.html" },
                { label: "02. JDK, JRE, JVM 실행 구조", path: "JavaBasics/02_jvm.html" },
                { label: "03. Java 프로그램 구조", path: "JavaBasics/03_program_structure.html" },
                { label: "04. 주석과 문서화 주석", path: "JavaBasics/04_comment.html" },
                { label: "05. 변수", path: "JavaBasics/05_variable.html" },
                { label: "06. 자료형", path: "JavaBasics/06_data_type.html" },
                { label: "07. 상수", path: "JavaBasics/07_constant.html" },
                { label: "08. 형변환", path: "JavaBasics/08_casting.html" },
                { label: "09. Escape 문자", path: "JavaBasics/09_escape.html" },
                { label: "10. 연산자", path: "JavaBasics/10_operator.html" },
                { label: "11. 제어문", path: "JavaBasics/11_control.html" },
                { label: "12. Wrapper 클래스", path: "JavaBasics/12_wrapper.html" },
                { label: "13. 배열", path: "JavaBasics/13_array.html" },
                { label: "14. 객체지향 프로그래밍", path: "JavaBasics/14_oop.html" },
                { label: "15. 클래스와 객체", path: "JavaBasics/15_class.html" },
                { label: "16. 접근 지정자", path: "JavaBasics/16_access_modifier.html" },
                { label: "17. 캡슐화", path: "JavaBasics/17_encapsulation.html" },
                { label: "18. this와 super", path: "JavaBasics/18_this_super.html" },
                { label: "19. 생성자", path: "JavaBasics/19_constructor.html" },
                { label: "20. 상속", path: "JavaBasics/20_inheritance.html" },
                { label: "21. 다형성", path: "JavaBasics/21_polymorphism.html" },
                { label: "22. static block", path: "JavaBasics/22_static_block.html" },
                { label: "23. 패키지", path: "JavaBasics/23_package.html" },
                { label: "24. 컬렉션", path: "JavaBasics/24_collection.html" },
                { label: "25. 추상 클래스", path: "JavaBasics/25_abstract_class.html" },
                { label: "26. final 지정자", path: "JavaBasics/26_final.html" },
                { label: "27. 인터페이스", path: "JavaBasics/27_interface.html" },
                { label: "28. 예외 처리", path: "JavaBasics/28_exception.html" },
                { label: "29. 내부 클래스", path: "JavaBasics/29_inner_class.html" },
                { label: "30. 스레드", path: "JavaBasics/30_thread.html" },
                { label: "31. 람다식", path: "JavaBasics/31_lambda.html" },
                { label: "32. Stream API", path: "JavaBasics/32_stream.html" },
                { label: "33. 정규표현식", path: "JavaBasics/33_regular_expression.html" },
                { label: "34. 입력/출력", path: "JavaBasics/34_input_output.html" }
            ]
        },
        {
            title: "OracleDatabaseSqlDeveloper",
            items: [
                { label: "00. Database 학습 로드맵", path: "OracleSqlDeveloper/00_database_roadmap.html" },
                { label: "01. Oracle 설치와 SQL Developer 접속", path: "OracleSqlDeveloper/01_oracle_install.html" },
                { label: "02. Oracle 삭제와 재설치 준비", path: "OracleSqlDeveloper/02_oracle_uninstall.html" },
                { label: "03. Multi Tenant, CDB, PDB 이해", path: "OracleSqlDeveloper/03_multitenant_cdb_pdb.html" },
                { label: "04. SCOTT / HR 계정과 샘플 스키마", path: "OracleSqlDeveloper/04_scott_hr_sample_schema.html" },
                { label: "05. Oracle 기본 명령어", path: "OracleSqlDeveloper/05_oracle_basic_commands.html" },
                { label: "06. Oracle 자료형", path: "OracleSqlDeveloper/06_oracle_datatype.html" },
                { label: "07. SQL의 종류", path: "OracleSqlDeveloper/07_sql_category.html" },
                { label: "08. SELECT 기본 조회", path: "OracleSqlDeveloper/08_select_basic.html" },
                { label: "09. WHERE 조건절과 SQL 연산자", path: "OracleSqlDeveloper/09_where_operator.html" },
                { label: "10. ORDER BY 정렬", path: "OracleSqlDeveloper/10_order_by.html" },
                { label: "11. 그룹 함수와 GROUP BY", path: "OracleSqlDeveloper/11_group_function.html" },
                { label: "12. INNER JOIN", path: "OracleSqlDeveloper/12_inner_join.html" },
                { label: "13. OUTER JOIN과 SELF JOIN", path: "OracleSqlDeveloper/13_outer_self_join.html" },
                { label: "14. SUBQUERY", path: "OracleSqlDeveloper/14_subquery.html" },
                { label: "15. TOP-N 쿼리와 페이징", path: "OracleSqlDeveloper/15_top_n_query.html" },
                { label: "16. 테이블 생성과 제약조건", path: "OracleSqlDeveloper/16_create_table_constraint.html" },
                { label: "17. ALTER, DROP, TRUNCATE", path: "OracleSqlDeveloper/17_alter_drop_truncate.html" },
                { label: "18. SEQUENCE", path: "OracleSqlDeveloper/18_sequence.html" },
                { label: "19. INSERT, UPDATE, DELETE", path: "OracleSqlDeveloper/19_insert_update_delete.html" },
                { label: "20. TRANSACTION", path: "OracleSqlDeveloper/20_transaction.html" },
                { label: "21. VIEW", path: "OracleSqlDeveloper/21_view.html" },
                { label: "22. INDEX", path: "OracleSqlDeveloper/22_index.html" },
                { label: "23. 사용자 생성과 권한", path: "OracleSqlDeveloper/23_user_privilege.html" },
                { label: "24. Oracle 내장 함수", path: "OracleSqlDeveloper/24_builtin_function.html" },
                { label: "25. 분석 함수", path: "OracleSqlDeveloper/25_analytic_function.html" },
                { label: "26. PL/SQL 기초", path: "OracleSqlDeveloper/26_plsql_basic.html" },
                { label: "27. PL/SQL 예외 처리와 프로시저", path: "OracleSqlDeveloper/27_plsql_exception_procedure.html" }
            ]
        }
    ];

    renderNavigation();

    function renderNavigation() {
        sideNav.innerHTML = "";
        sideNav.appendChild(createLink("Home", "00_index.html", isRootPage()));

        navGroups.forEach(function (group) {
            const details = document.createElement("details");
            details.open = group.items.some(function (item) {
                return isCurrentPage(item.path);
            });

            const summary = document.createElement("summary");
            summary.textContent = group.title;

            const list = document.createElement("ul");

            group.items.forEach(function (item) {
                const listItem = document.createElement("li");
                listItem.appendChild(createLink(item.label, item.path, isCurrentPage(item.path)));
                list.appendChild(listItem);
            });

            details.appendChild(summary);
            details.appendChild(list);
            sideNav.appendChild(details);
        });
    }

    function createLink(label, path, isActive) {
        const link = document.createElement("a");
        link.textContent = label;
        link.href = isActive ? "#" : rootPrefix + path;

        if (path === "00_index.html") {
            link.classList.add("home-link");
        }

        if (isActive) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
            link.addEventListener("click", function (event) {
                event.preventDefault();
            });
        }

        return link;
    }

    function isRootPage() {
        return currentPath.endsWith("/00_index.html") || currentPath.endsWith("/");
    }

    function isCurrentPage(relativePath) {
        return currentPath.endsWith("/" + normalizePath(relativePath));
    }

    function getRootPrefix(path) {
        if (
            path.includes("/HTML5&CSS3/") ||
            path.includes("/JavaBasics/") ||
            path.includes("/OracleSqlDeveloper/") ||
            path.includes("/studypages/")
        ) {
            return "../";
        }

        return "./";
    }

    function normalizePath(path) {
        return decodeURIComponent(path).replace(/\\/g, "/");
    }
})();
