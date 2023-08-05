-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- 主机： rm-j6c290l8bh4w5w0u0.mysql.rds.aliyuncs.com
-- 生成日期： 2023-07-24 14:06:46
-- 服务器版本： 8.0.25
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- 数据库： `u5`
--


--
-- 转存表中的数据 `n984_27hfwmistt`
--

INSERT INTO `n984_27hfwmistt` (`_id`, `部门名称`, `上级部门ID`, `是否禁用`, `是否删除`, `_create`, `_update`) VALUES
(1, '总部', '0', '0', '0', 1677122416, 1677122476);

-- --------------------------------------------------------





--
-- 转存表中的数据 `n984_etnezksayk`
--

INSERT INTO `n984_etnezksayk` (`_id`, `key`, `菜单名称`, `上级菜单ID`, `类型`, `排序`, `页面路径`, `接口路径`, `是否禁用`, `是否删除`, `_create`, `_update`) VALUES
(1, 'system', '系统管理', '0', '分组', 600, NULL, NULL, '0', '0', 1677121926, 1677121926),
(2, 'system_menu', '菜单管理', '1', '页面', 600, '/admin/system/menu', NULL, '0', '0', 1677122003, 1677122003),
(3, 'system_role', '角色管理', '1', '页面', 700, '/admin/system/role', NULL, '0', '0', 1677122084, 1677122093),
(4, 'system_staff', '员工管理', '1', '页面', 800, '/admin/system/staff', NULL, '0', '0', 1677122130, 1677122130),
(5, 'system_dept', '部门管理', '1', '页面', 900, '/admin/system/dept', NULL, '0', '0', 1677122190, 1677122190),
(6, 'stock_manage', '发券管理', '0', '分组', 800, NULL, NULL, '0', '0', 1686297829, 1686297829),
(7, 'stock_manage', '批次管理', '6', '页面', 900, '/admin/stock/manage', NULL, '0', '0', 1686298064, 1686298064),
(8, 'stock_cate_manage', '活动分类管理', '6', '页面', 800, '/admin/stock_cate/manage', NULL, '0', '0', 1686438013, 1686439624),
(9, 'stock_log_manage', '领券日志管理', '6', '页面', 700, '/admin/stock_log/manage', NULL, '0', '0', 1686438132, 1686438132),
(10, 'home_ad_manage', '首页广告管理', '6', '页面', 600, '/admin/home_ad/manage', NULL, '0', '0', 1686438262, 1686438262);

-- --------------------------------------------------------

--
-- 转存表中的数据 `n984_hdbhcrwh23`
--

INSERT INTO `n984_hdbhcrwh23` (`_id`, `用户名`, `手机号`, `邮箱`, `昵称`, `姓名`, `密码`, `角色ID`, `部门ID`, `是否禁用`, `是否删除`, `_create`, `_update`) VALUES
(1, '超级管理员', NULL, NULL, NULL, '超级管理员', '123123', 1, 1, 0, 0, 1677121626, 1677122371);

-- --------------------------------------------------------


--
-- 转存表中的数据 `n984_ihj2cmawrr`
--

INSERT INTO `n984_ihj2cmawrr` (`_id`, `角色名称`, `菜单IDs`, `是否禁用`, `是否删除`, `_create`, `_update`) VALUES
(1, '超管', '[1, 5, 4, 3, 2]', '0', '0', 1677122405, 1677122405);

-- --------------------------------------------------------

--
-- 转储表的索引
--



--
-- 表的索引 `n984_27hfwmistt`
--
ALTER TABLE `n984_27hfwmistt`
  ADD PRIMARY KEY (`_id`);


--
-- 表的索引 `n984_etnezksayk`
--
ALTER TABLE `n984_etnezksayk`
  ADD PRIMARY KEY (`_id`);

--
-- 表的索引 `n984_hdbhcrwh23`
--
ALTER TABLE `n984_hdbhcrwh23`
  ADD PRIMARY KEY (`_id`);

--
-- 表的索引 `n984_ihj2cmawrr`
--
ALTER TABLE `n984_ihj2cmawrr`
  ADD PRIMARY KEY (`_id`);



--
-- 在导出的表使用AUTO_INCREMENT
--


--
-- 使用表AUTO_INCREMENT `n984_27hfwmistt`
--
ALTER TABLE `n984_27hfwmistt`
  MODIFY `_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;



--
-- 使用表AUTO_INCREMENT `n984_etnezksayk`
--
ALTER TABLE `n984_etnezksayk`
  MODIFY `_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- 使用表AUTO_INCREMENT `n984_hdbhcrwh23`
--
ALTER TABLE `n984_hdbhcrwh23`
  MODIFY `_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `n984_ihj2cmawrr`
--
ALTER TABLE `n984_ihj2cmawrr`
  MODIFY `_id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;


COMMIT;
